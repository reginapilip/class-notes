<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Joins PHP/MySQL Demo</title>
</head>
<body>
<h1>Database Joins Using the Ideas Database (joins_demo2)</h1>
<?php

function db_connection(){
	$db = new mysqli('localhost','root','','joins_demo2');
	if ($db->connect_error) {
		$error = $db->connect_error;
		echo $error;
	}
	$db->set_charset('utf8');
	return $db;
}

function db_query($db,$sql){
	$result = $db->query($sql);
	$columns = $result->fetch_fields();
	echo '<table border=1>';
	echo "<tr>";
	foreach ($columns as $name) {
		echo "<th>" . $name->name . "</th>";
	}
	echo "</tr>";

	while ($row = $result->fetch_assoc()){
		echo "<tr>";
		foreach($row as $value) { 
			echo "<td>" . $value . "</td>";
		}
		echo "</tr>";
	}
	echo '</table>';
}

// Solution 1
// Show all comments for an idea where the idea.idea_id = 4
$sql = "SELECT comment.comment 
		FROM `idea` AS `idea` 
		JOIN `comment` AS `comment` 
		ON idea.idea_id = comment.idea_id 
		WHERE idea.idea_id = 4";

// Solution 2
// Show all comments for an idea where the idea.idea_id = 4 and include idea.description, idea.user_id, comment.comment 
// $sql = "SELECT idea.description, idea.user_id, comment.comment, comment.comment 
// 		FROM `idea` AS `idea`
// 		JOIN `comment` AS `comment`
// 		ON idea.idea_id = comment.idea_id
// 		WHERE idea.idea_id = 4";

// Solution 3
// Show all tags for an idea.idea_id = 4 and include the tag.tag_id
// $sql = "SELECT idea_tag.tag_id 
// 		FROM `idea` AS `idea`
// 		JOIN `idea_tag` AS `idea_tag`
// 		ON idea.idea_id = idea_tag.idea_id
// 		WHERE idea.idea_id = 4";

// Solution 4
// Show all tags for an idea.idea_id = 4 and include the tag.tag_id and order tha tags
// $sql = "SELECT idea_tag.tag_id, tag.tag 
// 		FROM `idea` AS `idea` 
// 		JOIN `idea_tag` AS `idea_tag` 
// 		ON idea.idea_id = idea_tag.idea_id 
// 		JOIN `tag` AS `tag` 
// 		ON idea_tag.tag_id = tag.tag_id 
// 		WHERE idea.idea_id = 4 ORDER BY tag.tag ASC";

// Solution 5
// Show user info for all ideas
// $sql = "SELECT idea.idea_id, idea.description, user.first_name, user.last_name, user.username
// 		FROM `idea` AS `idea`
// 		JOIN `user` AS `user`
// 		ON idea.user_id = user.user_id";

// Solution 6
// List idea.description, idea.user_id, comment.comment, user.first_name, user.last_name where idea.idea_id=1
// Try this now for other ID's

// $sql = "SELECT idea.description, idea.user_id, comment.comment, user.first_name, user.last_name 
// 		FROM `idea` AS `idea`
// 		JOIN `comment` AS `comment`
// 		ON idea.idea_id = comment.idea_id
// 		JOIN `user` AS `user`
// 		ON idea.user_id = user.user_id
// 		WHERE idea.idea_id = 1";

$db = db_connection();
db_query($db,$sql);
?>
	
</body>
</html>