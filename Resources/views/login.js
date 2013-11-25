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
	winLogin.title = 'Login';
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
	btnLogin.addEventListener('click',function(e)
	{
		var userLoginInfo = 
		{
			login: txtUserName.value,
			password: txtPassword.value
		};
		model.loginUser(config, userLoginInfo, function(e)
		{
			if (e.success) 
			{
				if(dblayer.loginUser(config, e.users[0]))
					winLogin.close();
				var user = e.users[0];
				alert('Success:\n' +'id: ' + user.id + '\n' +'sessionId: ' + config.cloud.sessionId + '\n' +
				'first name: ' + user.first_name + '\n' +'last name: ' + user.last_name);	
			} 
			else 
				alert('Error:\n' +((e.error && e.message) || JSON.stringify(e)));
		});
	});
	viewLogin.add(txtUserName);
	viewLogin.add(txtPassword);
	viewLogin.add(btnLogin);
	winLogin.add(viewLogin);
	winLogin.addEventListener('open',function(e)
    {
    	if(config.osname == 'android' && Ti.Platform.Android.API_LEVEL >10)
    	{
    		winLogin.getActivity().actionBar['displayHomeAsUp'] = true;
    		winLogin.getActivity().actionBar.onHomeIconItemSelected = function(e)
    		{winLogin.close();};
    	}
    });
	return winLogin;
};
