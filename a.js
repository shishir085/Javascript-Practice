
pant = 2499
bag = 15599
totalcost = pant + bag

dispant = pant * .41
disbag = bag * .1

totdis = dispant + disbag

couponpant = 29
couponbag = 272
totcou = couponbag + couponpant



totaloff = totdis + totcou


finalprice = totalcost - totaloff

wrapcharge=25
convinencecharge=20

finalp=finalprice+wrapcharge+convinencecharge


console.log(Math.floor(finalp))



