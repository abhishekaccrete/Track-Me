/**
 * @author Abhishek
 */
trackView = {};

trackView.open = function(config)
{
	var paramsForTrackWin = UIParams.paramsForWin(config);
	var winForTrackTab = UIComp.window(paramsForTrackWin);
	winForTrackTab.title = 'Track';
	var viewParent = trackView.getParentView(config);
	winForTrackTab.add(viewParent);
	return winForTrackTab;
};

trackView.getParentView = function(config)
{
	var paramParentView = UIParams.paramForParentView(config);
	var parentView = UIComp.view(paramParentView);
	
	var paramMapView = UIParams.paramForMapView(config);
	var mapView = UIComp.mapView(paramMapView);
	
	var paramBottomView = UIParams.paramForBottomView(config);
	var viewBottom = UIComp.view(paramBottomView);
	
	var parambtnStartTracking = UIParams.paramForBtnStartTracking(config); 
	var btnStartTracking = UIComp.button(parambtnStartTracking);
	
	var parambtnStopTracking = UIParams.paramForBtnStopTracking(config);
	var btnStopTracking = UIComp.button(parambtnStopTracking);
	
	parentView.add(mapView);
	parentView.add(viewBottom);
	viewBottom.add(btnStartTracking);
	viewBottom.add(btnStopTracking);
	
	

	btnStartTracking.addEventListener('click',function(e)
	{
		try
		{
			var intent = Titanium.Android.createServiceIntent( { url: 'locationService.js' } );
			// Service should run its code every 2 seconds.
			intent.putExtra('interval', 2000);
			intent.putExtra('message_to_echo', 'Titanium rocks!');		
			var service = Titanium.Android.createService(intent);
			service.start();
		}
		catch(e)
		{
			alert(e);
		}
	});
	btnStopTracking.addEventListener('click',function(e)
	{
		var intent = Ti.Android.createServiceIntent(
		{
			url : 'locationService.js'
		});
		Ti.Android.stopService(intent);
	});
	return parentView;
};
