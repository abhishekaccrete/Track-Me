user = {};

user.open = function(config, bolLoggedIn)
{
	if(bolLoggedIn)
		return user.loggedInView(config);
	else
		return user.loggedOutView(config);
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

user.loggedInView = function(config)
{
	var viewUserParams = UIParams.paramForParentView(config);
	var viewUserParent = UIComp.view(viewUserParams);
	
	var paramslblUserName = UIParams.paramForLabel(config);
	var lblUserName = UIComp.label(paramslblUserName);
	lblUserName.text = 'User name: '+config.userInfo.fieldByName('UserName');
	var paramslblFirstName = UIParams.paramForLabel(config);
	var lblFirstName = UIComp.label(paramslblFirstName);
	lblFirstName.text = 'First Name: '+config.userInfo.fieldByName('FirstName');
	var paramslblLastName = UIParams.paramForLabel(config);
	var lblLastName = UIComp.label(paramslblLastName);
	lblLastName.text = 'Last Name: '+config.userInfo.fieldByName('LastName');
	
	var paramBtnLogout = UIParams.paramForButton(config);
	paramBtnLogout.title = 'Logout';
	var btnLogout = UIComp.button(paramBtnLogout);
	btnLogout.addEventListener('click',function(e)
	{
		
	});
	viewUserParent.add(lblUserName);
	viewUserParent.add(lblFirstName);
	viewUserParent.add(lblLastName);
	viewUserParent.add(btnLogout);
	
	return viewUserParent;
};