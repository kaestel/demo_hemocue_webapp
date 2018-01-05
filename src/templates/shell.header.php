<? include_once($_SERVER['LOCAL_PATH']."/includes/segment.php") ?>
<? //include_once($_SERVER['FRAMEWORK_PATH']."/include/functions.inc.php") ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Hemocue</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="content-language" content="en" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />
	<? if($_SESSION["dev"]) { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/css/lib/seg_<?= $_SESSION["segment"] ?>_include.css" />
		<script type="text/javascript" src="/js/lib/seg_<?= $_SESSION["segment"] ?>_include.js"></script>
	<? } else { ?>
		<link type="text/css" rel="stylesheet" media="all" href="/css/seg_<?= $_SESSION["segment"] ?>.css" />
		<script type="text/javascript" src="/js/seg_<?= $_SESSION["segment"] ?>.js"></script>
	<? } ?>
</head>

<body class="i:validdevice<?= isset($body_class) ? ' '.$body_class : '' ?>">

<div id="page" class="i:page">

	<div id="header"></div>
	
	<div id="content">