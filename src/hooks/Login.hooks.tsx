const LoginHooks = () => {
  const actionHooksLogin = (): boolean => {
    return true;
  };

  const actionHooksRegister = (): boolean => {
    return true;
  };

  const actionHooksForgotPassword = (): boolean => {
    return true;
  };

  const actionHooksResetPassword = (): boolean => {
    return true;
  };

  const actionHooksChangePassword = (): boolean => {
    return true;
  };

  const actionHooksChangeEmail = (): boolean => {
    return true;
  };

  return {
    // Hooks
    actionHooksLogin,
    actionHooksRegister,
    actionHooksForgotPassword,
    actionHooksResetPassword,
    actionHooksChangePassword,
    actionHooksChangeEmail,
  };
};

export default LoginHooks;
