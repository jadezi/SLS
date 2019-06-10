-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
--SET ANSI_NULLS ON
--GO
--SET QUOTED_IDENTIFIER ON
--GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE  GETDATAFORWEEK
	-- Add the parameters for the stored procedure here
	--<@Param1, sysname, @p1> <Datatype_For_Param1, , int> = <Default_Value_For_Param1, , 0>, 
	--<@Param2, sysname, @p2> <Datatype_For_Param2, , int> = <Default_Value_For_Param2, , 0>
AS	DECLARE @ThisWeekStartTime NVARCHAR(100),@ThisWeekEndTime NVARCHAR(100)--本周
	SELECT @ThisWeekStartTime= CONVERT(nvarchar(10), DATEADD(wk, DATEDIFF(wk,0,DATEADD(dd, -1, getdate()) ), 0),121)--本周开始时间
	SELECT @ThisWeekEndTime= CONVERT(nvarchar(10), DATEADD(wk, DATEDIFF(wk,0,DATEADD(dd, -1, getdate()) ), 6),121)--本周结束时
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	--SET NOCOUNT ON;

    -- Insert statements for procedure here
	--SELECT <@Param1, sysname, @p1>, <@Param2, sysname, @p2>
	SELECT
	a.dt AS '时间',
	count(lappdate) AS '数据'
	FROM
	(
		SELECT
			dateadd(d, number,@ThisWeekStartTime) dt
		FROM
			master..spt_values
		WHERE
			type = 'p'
		AND dateadd(d, number,@ThisWeekStartTime) <= @ThisWeekEndTime
	) a
	LEFT JOIN leaveInfo b ON a.dt = b.lappdate
	group by a.dt, lappdate
	order by a.dt
END
--GO
