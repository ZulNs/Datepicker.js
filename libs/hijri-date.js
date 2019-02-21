/**
 * @description JavaScript Hijri Date Function
 * @version 2.0
 * 
 * @author (c) ZulNs, Yogyakarta, December 2013
 * revised to version 2.0: Gorontalo, 18 January 2019
 * 
 * @namespace HijriDate
 */
'use strict';
function HijriDate(){
	let hd=typeof this=='object'?this:window,time,tzom=Date.parse('01 Jan 1970'),tzo=parseInt(parseInt(tzom/1000)/60),tzs=Date(1970,0,1),
		utc={yyy:0,mmm:0,ddd:0,day:0,hh:0,mm:0,ss:0,ms:0},loc={yyy:0,mmm:0,ddd:0,day:0,hh:0,mm:0,ss:0,ms:0};
	tzs=tzs.substring(tzs.lastIndexOf('GMT'));
	time=HijriDate.UTC(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);
	if(isNaN(time))time=Date.now();
	else if(arguments.length==1)time=HijriDate.int(arguments[0],Date.now());
	else time+=tzom;
	updDt(utc,time);updDt(loc,time-tzom);
	function getUTCTmStr(){let d=HijriDate.toNDigit;return d(utc.hh,2)+':'+d(utc.mm,2)+':'+d(utc.ss,2)}
	function getLocTmStr(){let d=HijriDate.toNDigit;return d(loc.hh,2)+':'+d(loc.mm,2)+':'+d(loc.ss,2)}
	function updUTCTm(){updTm(utc);updDt(utc,time);updDt(loc,time-tzom)}
	function updLocTm(){updTm(loc);updDt(loc,time);time+=tzom;updDt(utc,time)}
	function updTm(r){time=HijriDate.UTC(r.yyy,r.mmm,r.ddd,r.hh,r.mm,r.ss,r.ms)}
	function updDt(r,t){HijriDate.parseTime(r,t)}
	hd.getDate=function(){return loc.ddd};
	hd.getDay=function(){return loc.day};
	hd.getFullYear=function(){return loc.yyy};
	hd.getHours=function(){return loc.hh};
	hd.getMilliseconds=function(){return loc.ms};
	hd.getMinutes=function(){return loc.mm};
	hd.getMonth=function(){return loc.mmm};
	hd.getSeconds=function(){return loc.ss};
	hd.getTime=function(){return time};
	hd.getTimezoneOffset=function(){return tzo};
	hd.getUTCDate=function(){return utc.ddd};
	hd.getUTCDay=function(){return utc.day};
	hd.getUTCFullYear=function(){return utc.yyy};
	hd.getUTCHours=function(){return utc.hh};
	hd.getUTCMilliseconds=function(){return utc.ms};
	hd.getUTCMinutes=function(){return utc.mm};
	hd.getUTCMonth=function(){return utc.mmm};
	hd.getUTCSeconds=function(){return utc.ss};
	hd.setDate=function(dt){loc.ddd=HijriDate.int(dt,loc.ddd);updLocTm()};
	hd.setFullYear=function(yr){loc.yyy=HijriDate.int(yr,loc.yyy);updLocTm()};
	hd.setHours=function(hr){loc.hh=HijriDate.int(hr,loc.hh);updLocTm()};
	hd.setMilliseconds=function(ms){loc.ms=HijriDate.int(ms,loc.ms);updLocTm()};
	hd.setMinutes=function(min){loc.mm=HijriDate.int(min,loc.mm);updLocTm()};
	hd.setMonth=function(mon){loc.mmm=HijriDate.int(mon,loc.mmm);updLocTm()};
	hd.setSeconds=function(sec){loc.ss=HijriDate.int(sec,loc.ss);updLocTm()};
	hd.setTime=function(tm){time=HijriDate.int(tm,time);updDt(utc,time);updDt(loc,time-tzom)};
	hd.setUTCDate=function(dt){utc.ddd=HijriDate.int(dt,utc.ddd);updUTCTm()};
	hd.setUTCFullYear=function(yr){utc.yyy=HijriDate.int(yr,utc.yyy);updUTCTm()};
	hd.setUTCHours=function(hr){utc.hh=HijriDate.int(hr,utc.hh);updUTCTm()};
	hd.setUTCMilliseconds=function(ms){utc.ms=HijriDate.int(ms,utc.ms);updUTCTm()};
	hd.setUTCMinutes=function(min){utc.mm=HijriDate.int(min,utc.mm);updUTCTm()};
	hd.setUTCMonth=function(mon){utc.mmm=HijriDate.int(mon,utc.mmm);updUTCTm()};
	hd.setUTCSeconds=function(sec){utc.ss=HijriDate.int(sec,utc.ss);updUTCTm()};
	hd.toDateString=function(){
		let h=HijriDate,d=h.toNDigit;return h.weekdayShortNames[loc.day]+' '+h.monthShortNames[loc.mmm]+' '+d(loc.ddd,2)+' '+d(loc.yyy,4)
	};
	hd.toISOString=function(){
		let d=HijriDate.toNDigit;return d(utc.yyy,utc.yyy<0?6:4)+'-'+d(utc.mmm+1,2)+'-'+d(utc.ddd,2)+'T'+getUTCTmStr()+'.'+d(utc.ms,3)+'Z'
	};
	hd.toJSON=function(){return hd.toISOString()};
	hd.toString=function(){return hd.toDateString()+' '+hd.toTimeString()};
	hd.toTimeString=function(){return getLocTmStr()+' '+tzs};
	hd.toUTCString=function(){
		let h=HijriDate,d=h.toNDigit;
		return h.weekdayShortNames[utc.day]+', '+d(utc.ddd,2)+' '+h.monthShortNames[utc.mmm]+' '+d(utc.yyy,4)+' '+getUTCTmStr()+' GMT'
	};
	hd.valueOf=function(){return time};
	hd.getDayCountInMonth=function(){return HijriDate.dayCountInMonth((loc.yyy-1)*12+loc.mmm)};
	hd.getUTCDayCountInMonth=function(){return HijriDate.dayCountInMonth((utc.yyy-1)*12+utc.mmm)};
	return hd.toString()
}
Object.defineProperty(HijriDate,'DIFF',{value:-425215872e5});//Value of time interval in milliseconds from January 1, 1970AD, 00:00:00 AM to July 19, 622AD, 00:00:00 AM
Object.defineProperty(HijriDate,'MOON_CYCLE',{value:29.5305882});
Object.defineProperty(HijriDate,'dayCount',{value:function(m){
	let h=HijriDate.MOON_CYCLE;
	if(m>=0) return parseInt(m*h);
	let r=(parseInt(m/360)-1)*360;//30 years cycle
	return parseInt(r*h)-parseInt((r-m)*h)
}});
Object.defineProperty(HijriDate,'dayCountInMonth',{value:function(m){return HijriDate.dayCount(m+1)-HijriDate.dayCount(m)}});
Object.defineProperty(HijriDate,'int',{value:function(n,d){n=parseInt(n);return isNaN(n)?d:n}});
Object.defineProperty(HijriDate,'now',{value:function(){return Date.now()}});
Object.defineProperty(HijriDate,'parseTime',{value:function(r,t){
	let h=HijriDate,hdc=h.dayCount;
	t-=h.DIFF;
	let tp=t%864e5,dc=parseInt(t/864e5),m=parseInt(dc/h.MOON_CYCLE);
	if(t<0){
		if(tp<0){dc--;tp+=864e5}
		if(dc<hdc(m))m--
	}
	r.ddd=1+dc-hdc(m);
	if(r.ddd>h.dayCountInMonth(m))r.ddd-=h.dayCountInMonth(m++);
	r.yyy=Math.floor(m/12)+1;
	r.mmm=(m%12+12)%12;
	r.ms=tp%1e3;tp=parseInt(tp/1e3);
	r.ss=tp%60;tp=parseInt(tp/60);
	r.mm=tp%60;tp=parseInt(tp/60);
	r.hh=tp%24;
	r.day=((dc+5)%7+7)%7
}});
Object.defineProperty(HijriDate,'toNDigit',{value:function(n,d){
	let s=Math.abs(n).toString();if(s.length<d)s=('00000000'+s).slice(-d);if(n<0)s='-'+s;return s
}});
Object.defineProperty(HijriDate,'UTC',{value:function(){
	let h=HijriDate,i=h.int,a=arguments,t;
	if(isNaN(a[0]))return NaN;
	a[0]=parseInt(a[0]);a[1]=i(a[1],0);a[2]=i(a[2],1);a[3]=i(a[3],0);a[4]=i(a[4],0);a[5]=i(a[5],0);a[6]=i(a[6],0);
	t=h.dayCount((a[0]-1)*12+a[1]);t+=a[2]-1;t*=864e5;t+=a[3]*36e5;t+=a[4]*6e4;t+=a[5]*1e3;t+=a[6];t+=h.DIFF;return t
}});
HijriDate.monthNames=["Muharram","Safar","Rabi'ul-Awwal","Rabi'ul-Akhir","Jumadal-Ula","Jumadal-Akhir","Rajab","Sha'ban","Ramadan","Syawwal","Dhul-Qa'da","Dhul-Hijja"];
HijriDate.monthShortNames=["Muh","Saf","RAw","RAk","JAw","JAk","Raj","Sha","Ram","Sya","DhQ","DhH"];
HijriDate.weekdayNames=["Ahad","Ithnin","Thulatha","Arba'a","Khams","Jumu'ah","Sabt"];
HijriDate.weekdayShortNames=["Ahd","Ith","Thu","Arb","Kha","Jum","Sab"];
Date.prototype.getDayCountInMonth=function(){
	let y=this.getFullYear(),isLeapYear=(y%100!=0)&&(y%4==0)||(y%400==0),c=[31,isLeapYear?29:28,31,30,31,30,31,31,30,31,30,31];
	return c[this.getMonth()]
};
Date.prototype.getUTCDayCountInMonth=function(){
	let y=this.getUTCFullYear(),isLeapYear=(y%100!=0)&&(y%4==0)||(y%400==0),c=[31,isLeapYear?29:28,31,30,31,30,31,31,30,31,30,31];
	return c[this.getUTCMonth()]
};
