//a152285395a2456
mainView = {};

mainView.open = function(config)
{
	mainView.mainWin(config);
};

mainView.mainWin = function(config)
{
	var tabGroup = UIComp.tabGroup();
	var tabTrack = mainView.getTrackTab(config);
	var tabUsers = mainView.getUserTab(config);
	tabGroup.addTab(tabTrack);
	tabGroup.addTab(tabUsers);
	tabGroup.open();
};

mainView.getTrackTab = function(config)
{
	var paramsForTrackTab = UIParams.paramsForTabTrack(config);
	paramsForTrackTab.window = mainView.getTrackWindow(config);
	var tbTrack = UIComp.tab(paramsForTrackTab);
	return tbTrack;
};

mainView.getUserTab = function(config)
{
	var paramsForUsersTab = UIParams.paramsForTabUsers(config);
	paramsForUsersTab.window = mainView.getUserWindow(config);
	var tbUsers = UIComp.tab(paramsForUsersTab);
	return tbUsers;
};

mainView.getTrackWindow = function(config)
{
	var paramsForTrackWin = UIParams.paramsForWin(config);
	var winForTrackTab = UIComp.window(paramsForTrackWin);
	winForTrackTab.title = 'Track';
	return winForTrackTab;
};

mainView.getUserWindow = function(config)
{
	var paramsForUsersWin = UIParams.paramsForWin(config);
	var viewUser = mainView.getViewForUserWin(config);
	var winForUsersTab = UIComp.window(paramsForUsersWin);
	winForUsersTab.add(viewUser);
	winForUsersTab.title = 'Users';
	return winForUsersTab;
};

mainView.getViewForUserWin = function(config)
{
	var paramBtnRegister = UIParams.paramForButton(config);
	var btnRegister = UIComp.button(paramBtnRegister);
	btnRegister.title = 'Register';
	btnRegister.addEventListner('click',function(e)
	{
		
	});
	
	var paramBtnLogin = UIParams.paramForButton(config);
	var btnLogin = UIComp.button(paramBtnLogin);
	btnLogin = 'Login';
	
	var viewParams = UIParams.paramForParentView(config);
	var viewParent = UIComp.view(viewParams);
	
	viewParent.add(btnRegister);
	viewParent.add(btnLogin);
	
	
	/*
	*/
	return viewParent;
};
