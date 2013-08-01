<?php
	$body_class = "";
	$page_title = "";
?>
<? include_once($_SERVER["LOCAL_PATH"]."/templates/shell.header.php") ?>

<div class="scene login">
	
	<form action="" method="post">
		<h2>Login</h2>
		<fieldset>
			<div class="field text">
				<label>Username</label>
				<input type="text" name="username" value="username" />
			</div>
			<div class="field text">
				<label>Password</label>
				<input type="password" name="password" value="password" />
			</div>
		</fieldset>
		<ul class="actions">
			<li><input type="button" class="button" value="Login" /></li>
		</ul>
	</form>

</div>

<div class="scene list">
	<h2>Presentations</h2>
	<ul class="actions">
		<li><a href="" class="button">Add more presentations</a></li>
	</ul>

	<ul class="list">
		<li class="p1"><h3>WBC & WBC DIFF</h3></li>
		<li class="p2"><h3>Albumin 201</h3></li>
		<li class="p3"><h3>Hemoglobinsystemer</h3></li>
		<li class="p4"><h3>HbA1c 501</h3></li>
	</ul>
</div>

<div class="scene add">
	<h2>Add more presentations</h2>
	<ul class="actions">
		<li><a href="" class="button">Done</a></li>
	</ul>

	<ul class="list">
		<li class="added">
			<h3>WBC & WBC DIFF</h3>
			<ul class="actions">
				<li><a href="" class="button remove">Remove</a></li>
			</ul>
		</li>
		<li class="added">
			<h3>Albumin 201</h3>
			<ul class="actions">
				<li><a href="" class="button remove">Remove</a></li>
			</ul>
		</li>
		<li class="">
			<h3>Albumin 202</h3>
			<ul class="actions">
				<li><a href="" class="button add">Add</a></li>
			</ul>
		</li>
		<li class="p2">
			<ul class="actions">
				<li><a href="" class="button add">Add</a></li>
			</ul>
			<h3>Albumin 203</h3>
		</li>
		<li class="p2">
			<h3>Albumin 204</h3>
			<ul class="actions">
				<li><a href="" class="button add">Add</a></li>
			</ul>
		</li>
		<li class="added">
			<h3>Albumin 205</h3>
			<ul class="actions">
				<li><a href="" class="button remove">Remove</a></li>
			</ul>
		</li>
		<li class="added">
			<h3>Hemoglobinsystemer</h3>
			<ul class="actions">
				<li><a href="" class="button remove">Remove</a></li>
			</ul>
		</li>
		<li class="p2">
			<h3>Albumin 201</h3>
			<ul class="actions">
				<li><a href="" class="button add">Add</a></li>
			</ul>
		</li>
		<li class="added">
			<h3>HbA1c 501</h3>
			<ul class="actions">
				<li><a href="" class="button remove">Remove</a></li>
			</ul>
		</li>
		<li class="p4">
			<h3>HbA1c 601</h3>
			<ul class="actions">
				<li><a href="" class="button add">Add</a></li>
			</ul>
		</li>
	</ul>
	
</div>

<div class="scene presentation">
	<div class="feedback">Feedback</div>
	<div class="close">Close</div>
	
	<div class="wrapper">
		<ul class="presentation">
			<li class="s1">slide 1</li>
			<li class="s2">slide 2</li>
			<li class="s3">slide 3
				<video controls="autohide">
					<source src="/media/video/video_1.mp4" />
					<source src="/media/video/video_1.ogv" />
				</video>
			</li>
		</ul>
	</div>
</div>

<div class="scene feedback">

	<form action="" method="post">
		<h2>Feedback</h2>
		<fieldset>
			<div class="field select">
				<label>Client</label>
				<select name="client">
					<option value="">Hospital A</option>
					<option value="">Hospital B</option>
					<option value="">Hospital C</option>
				</select>
			</div>
			<div class="field text">
				<label>Title</label>
				<input type="text" name="title" />
			</div>
			<div class="field text">
				<label>Feedback</label>
				<textarea name="feedback"></textarea>
			</div>
		</fieldset>
		<ul class="actions">
			<li><input type="button" class="button" value="Save" /></li>
			<li><input type="button" class="button" value="Cancel" /></li>
		</ul>
	</form>

</div>

<script type="text/javascript">
	// alert(document.getElementsByTagName("script")[0].src);
</script>

<? include_once($_SERVER["LOCAL_PATH"]."/templates/shell.footer.php") ?>
