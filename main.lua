RegisterNetEvent('nz_notify:notify')
AddEventHandler('nz_notify:notify', function (data)
	if not IsPauseMenuActive() then
		SendNUIMessage(
			{
				type = data.type,
				time = data.time or 3000,
				title = data.title,
				msg = data.msg,
			}
		)
	end
end)
