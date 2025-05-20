<?php
define('WWW_ROOT','http://'.$_SERVER['SERVER_NAME']);

define('DS',DIRECTORY_SEPARATOR);

define('CRM_ROOT',dirname(dirname(__FILE__)).DS);

define('CORE_DIR',CRM_ROOT.'core'.DS);

define('CLASSES_DIR',CORE_DIR.'classes'.DS);

define('FILES_DIR',CORE_DIR.'file_system'.DS);

define('TEMPLATES_DIR',CRM_ROOT.'templates'.DS);

define('UPLOAD_DIR',CRM_ROOT.'upload'.DS);

define('TEMPLATE_PLUGINS','plugins'.DS);

define('TEMPLATES_CORE_DIR',TEMPLATES_DIR.'main'.DS);

define('JS_DIR',CRM_ROOT.'JS'.DS);

define('CSS_DIR',CRM_ROOT.'CSS'.DS);

define('JSON_DIR',CRM_ROOT.'JSON'.DS);

define('SRV_NAME','192.168.1.3');

define('GLOBAL_DB','srv');

define('DB_DRIVER','sqlsrv');

define('DOMAIN_NAME','RDSH1');

define('FS_TABLE','files');

define('FS_TABLE_FOLDER','Files');

define('TEPLMATES_DIR_NAME','templates');

define('UPDATE_TRANSLATE',false);

define('QUERY_SPACE',' ');

?>
