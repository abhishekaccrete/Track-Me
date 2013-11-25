config = 
{
	osname: Ti.Platform.osname,
	resPath: Ti.Filesystem.resourcesDirectory,
	platformWidth: Ti.Platform.displayCaps.platformWidth,
	platformHeight: Ti.Platform.displayCaps.platformHeight,
	viewPath: Ti.Filesystem.resourcesDirectory+'views/',
	modelPath: Ti.Filesystem.resourcesDirectory+'model/',
	imgPath: Ti.Filesystem.resourcesDirectory+'images/',
	cloud: require('ti.cloud'),
	dbPath: Ti.Filesystem.resourcesDirectory+'track_me.db'
};

try
{
	config.db = Ti.Database.install(config.dbPath,'Tracking');
	Ti.Geolocation.purpose = 'Positioning';
	if(!Ti.Geolocation.locationServicesEnabled)
	{
		var alertDlg = UIComp.alertDialog('Location service is disabled. Enable GPS and try again.',['OK']);
		alertDlg.show();
	}
	else
	{
		Ti.Geolocation.getCurrentPosition(function(e)
		{
			if (e.error)
			{
				var alertDlg = UIComp.alertDialog('Location service is disabled. Enable GPS and try again.',['OK']);
				alertDlg.show();
				return;
			}
			else
			{
				config.lat = e.coords.latitude;
				config.lon = e.coords.longitude;
			}
		});
		Ti.include(config.viewPath+'UIComp.js');
		Ti.include(config.viewPath+'UIParams.js');
		Ti.include(config.modelPath+'model.js');
		Ti.include(config.viewPath+'registerView.js');
		Ti.include(config.viewPath+'user.js');
		Ti.include(config.viewPath+'login.js');
		Ti.include(config.viewPath+'mainView.js');
		Ti.include(config.modelPath+'dblayer.js');
		mainView.open(config);
	}
}
catch(e)
{
	alert(e);
}