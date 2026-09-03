-- AI产品经理代练系统 · 数据库表结构
-- 在 Supabase SQL Editor 中执行

-- 1. 用户数据表（每个用户一条记录，存储所有学习进度、配置、知识库等）
CREATE TABLE IF NOT EXISTS user_data (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  data JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 聊天会话表（每条会话一条记录）
CREATE TABLE IF NOT EXISTS chat_sessions (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username TEXT NOT NULL,
  session_id TEXT NOT NULL,
  title TEXT DEFAULT '',
  messages JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(username, session_id)
);

-- 3. 自动更新 updated_at 的触发器
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trigger_user_data_updated_at
  BEFORE UPDATE ON user_data
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE OR REPLACE TRIGGER trigger_chat_sessions_updated_at
  BEFORE UPDATE ON chat_sessions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- 4. 开启 RLS（行级安全），但允许通过 anon key 基于 username 操作
ALTER TABLE user_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_sessions ENABLE ROW LEVEL SECURITY;

-- 允许所有用户读取自己的数据
CREATE POLICY "允许用户读写自己的数据"
  ON user_data
  FOR ALL
  USING (username = current_user)
  WITH CHECK (username = current_user);

-- 注意：由于我们使用 anon key + username 方式，RLS 需要调整
-- 更实际的方案是使用 Service Role Key 或关闭 RLS
-- 对于学习工具，我们暂时关闭 RLS（仅限学习用途，不包含敏感数据）
ALTER TABLE user_data DISABLE ROW LEVEL SECURITY;
ALTER TABLE chat_sessions DISABLE ROW LEVEL SECURITY;