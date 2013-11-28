/**
 * @author Abhishek
 */
if(config.osname == 'android')
{
	var service = Titanium.Android.currentService;
	var intent = service.intent;
	var message = intent.getStringExtra("message_to_echo");
	Titanium.API.info("Hello World!  I am a Service.  I have this to say: " + message);
	Ti.Geolocation.getCurrentPosition(function(e)
	{
		var newDate = new Date();
		var datetime = "LastSync: " + newDate.today() + " @ " + newDate.timeNow();
		try	
		{
			if (e.error)
				config.db.execute('Insert into error_log (log_date_time,log_error) values ("'+datetime+'","'+e.error+'")');
			else
				config.db.execute('Insert into track(latitude, longitude, log_date_time) values ("'+e.coords.latitude+'","'
				+e.coords.longitude+'","'+datetime+'")');
		}
		catch(e)
		{
			config.db.execute('Insert into error_log (log_date_time,log_error) values ("'+datetime+'","SQL Error")');			
		}
	});
}
else
{
	Ti.API.info('bg-service1: service has been invoked once, and will now be stopped to release it from memory.');
	Ti.App.currentService.stop();
	var listener = Ti.App.currentService.addEventListener('stop',function()
	{
		Ti.API.info('bg-service1: Although the service has been stopped, it is still registered and will be executed '
		+'again on next pause');
		Ti.API.info('bg-service1: As all background services are automatically stopped on resume, it is not always '
		+'necessary to explicitly stop a service');
	});
}