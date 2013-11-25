/**
 * @author Abhishek
 */
login={};

login.open = function(config)
{
	var paramView = UIParams.paramForParentView(config);
	var viewLogin = UIComp.view(paramView);
	
	var paramWinLogin = UIParams.paramsForWin(config);
	var winLogin = UIComp.window(paramWinLogin);
	
	var paramTxtFldUsername = UIParams.paramForTxtFld(config);
	var txtUserName = UIComp.textField(paramTxtFldUsername);
	txtUserName.hintText = 'User name';
	
	var paramTxtFldPwd = UIParams.paramForTxtFld(config);
	var txtPassword = UIComp.textField(paramTxtFldPwd);
	txtPassword.hintText = 'Password';
	txtPassword.passwordMask = true;
	
	var paramBtnLogin = UIParams.paramForButton(config);
	var btnLogin = UIComp.button(paramBtnLogin);
	btnLogin.title = 'Login';
	
	viewLogin.add(txtUserName);
	viewLogin.add(txtPassword);
	viewLogin.add(btnLogin);
	winLogin.add(viewLogin);
	return winLogin;
};
