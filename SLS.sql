select *
from leaveInfo
where datediff(day,lappdate,GETDATE())=4 