mainView = {};

mainView.open = function(config)
{
	mainView.mainWin(config);
};

mainView.mainWin = function(config)
{
	var tabGroup = UIComp.tabGroup();
	tabTrack = mainView.getTrackTab(config);
	tabMyTracks = mainView.getMyTracks(config);
	tabUsers = mainView.getUserTab(config);
	tabGroup.addTab(tabTrack);
	tabGroup.addTab(tabMyTracks);
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

mainView.getMyTracks = function(config)
{
	var paramsForMyTrack = UIParams.paramsForTabMyTrack(config);
	paramsForMyTrack.window = mainView.getMyTracksWindow(config);
	var tabMyTrack = UIComp.tab(paramsForMyTrack);
	return tabMyTrack;
};

mainView.getMyTracksWindow = function(config)
{
	var paramMyTracksWin = UIParams.paramsForWin(config);
	var winMyTracks = UIComp.window(paramMyTracksWin);
	//var myTracksView = myTracksView.getMyTracksView(config);
	//winMyTracks.add(myTracksView);
	return winMyTracks;
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
	return trackView.open(config);
};

mainView.getUserWindow = function(config)
{
	var paramsForUsersWin = UIParams.paramsForWin(config);
	winForUsersTab = UIComp.window(paramsForUsersWin);
	winForUsersTab.title = 'Users';
	winForUsersTab.addEventListener('focus',function(e)
	{
		var userLog = dblayer.getUser(config);
		config.userInfo = userLog;
		if(userLog.rowCount > 0)
			var viewUser = user.open(config,true);
		else
			var viewUser = user.open(config,false);
		if(winForUsersTab.children.length > 0)
			winForUsersTab.remove(winForUsersTab.children[0]);
		winForUsersTab.add(viewUser);
	});
	return winForUsersTab;
};

mainView.getViewForUserWin = function(config)
{
	return user.open(config, false);
};
