user = {};

user.open = function(config, bolLoggedIn)
{
	if(!bolLoggedIn)
	{
		return user.loggedOutView(config);
	}
	else
	{
		
	}
};

user.loggedOutView = function(config)
{
	var paramBtnRegister = UIParams.paramForButton(config);
	var btnRegister = UIComp.button(paramBtnRegister);
	btnRegister.title = 'Register';
	btnRegister.addEventListener('click',function(e)
	{
		tabUsers.open(registerView.open(config));
	});
	var paramBtnLogin = UIParams.paramForButton(config);
	var btnLogin = UIComp.button(paramBtnLogin);
	btnLogin.title = 'Login';
	btnLogin.addEventListener('click',function(e)
	{
		tabUsers.open(login.open(config));
	});
	var viewParams = UIParams.paramForParentView(config);
	var viewParent = UIComp.view(viewParams);	
	viewParent.add(btnRegister);
	viewParent.add(btnLogin);
	return viewParent;	
};
