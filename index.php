<?php
// echo '1'; exit;
require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/core/classes/onload.php';
new onload(Core: $Core);
?>
<!DOCTYPE html>
<html>
<head>
<title>Грузоперевозки</title>
<?php $Site->get_meta(); ?>
<link href="/css/index-page.css" rel="stylesheet" type="text/css" />
<?php $Site->get_files(); ?>
</head>
<body>

<?php
// phpinfo();
if($User->user_name === 'new'){
	$Site->render_tmpl(path: TEMPLATES_CORE_DIR.'new_user_menu.php');
}else{
	$Site->render_tmpl(path: TEMPLATES_CORE_DIR.'main_menu.php');
	// /templates/crm/modalwin.php
	if(strpos(haystack: $_REQUEST['reference'],needle: 'templates/bill') || strpos(haystack: $_REQUEST['reference'],needle: 'templates/calls')  || strpos(haystack: $_REQUEST['reference'],needle: 'templates/crm/modalwin')){
		$rPath = $_SERVER['DOCUMENT_ROOT'].$_REQUEST['reference']; //Врезка блока
		require_once $rPath;
	}else{
		if (v(var: $Site->reference_url)) {
			$Site->get_reference_html();
		}
		if ((!$_REQUEST['reference']) && ($User->user_group_name != 'external_users')) {
			//require_once $_SERVER['DOCUMENT_ROOT'] . "/templates/crm/script.php";
		}
	}
}
?>
</body>
</html>
