# nz_notify
Simple notification UI

#### Hello everyone, I wrote a notification UI today, I hope you can like it, its structure is very simple, you can modify the style you want by yourself

![](https://s3.bmp.ovh/imgs/2021/12/019c97bc77e32085.png)


```
    TriggerEvent('nz_notify:notify', {
		type = 'notify', --Optional "notify"、"warn"、"success"、"error"
		time = 5000, -- Fill in your time
		title = 'Fill in your title',
		msg = 'Fill in your msg',
	})
```
