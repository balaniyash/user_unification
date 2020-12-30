console.log('Test Script Started')
var params = new URLSearchParams(window.location.search);
var version = params.has('til_version')

function receiveMessage(evt) {
	if (evt.origin === 'https://tilanalytics.timesinternet.in') {
		_tiluuid = evt.data;
		console.log('my custom user id: '+_tiluuid)
		localStorage.setItem('_tiluuid', _tiluuid);
    		localStorage.setItem('_til_uuid_timestamp', new Date().getTime());
		localStorage.setItem('_til_version', 'v3');
	}
}
if(version != "v3"){	
window.addEventListener('message', receiveMessage, false);
document.getElementById("_tiluuid_frame").src='https://tilanalytics.timesinternet.in/frame_v3.min.html';
}	
console.log('Test Script Ended')
