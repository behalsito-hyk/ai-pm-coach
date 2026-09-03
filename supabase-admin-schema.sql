-- AI产品经理代练系统 · 管理员模块数据库表
-- 在 Supabase SQL Editor 中执行

-- 1. 用户管理表
CREATE TABLE IF NOT EXISTS users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  is_admin BOOLEAN DEFAULT false,
  disabled BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_login TIMESTAMPTZ
);

-- 2. 登录日志表
CREATE TABLE IF NOT EXISTS login_logs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username TEXT NOT NULL,
  login_time TIMESTAMPTZ DEFAULT NOW(),
  ip TEXT DEFAULT '',
  user_agent TEXT DEFAULT ''
);

-- 3. 自动更新 updated_at（复用前一个触发器）
-- 4. 创建第一条管理员账号的存储过程
CREATE OR REPLACE FUNCTION register_user(
  p_username TEXT,
  p_password_hash TEXT
) RETURNS JSONB AS $$
DECLARE
  v_is_admin BOOLEAN;
  v_user_count BIGINT;
BEGIN
  SELECT COUNT(*) INTO v_user_count FROM users;
  v_is_admin := (v_user_count = 0);
  
  INSERT INTO users (username, password_hash, is_admin)
  VALUES (p_username, p_password_hash, v_is_admin)
  ON CONFLICT (username) DO UPDATE
  SET password_hash = EXCLUDED.password_hash,
      last_login = NOW();
  
  RETURN jsonb_build_object(
    'success', true,
    'is_admin', v_is_admin,
    'is_first', (v_user_count = 0)
  );
END;
$$ LANGUAGE plpgsql;