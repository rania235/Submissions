<?php
require_once './DB_alternative/index.php';
$db = new DB_alternative( [
	'todo'
] );

if ( isset( $_GET ) && isset( $_GET['form_type'] ) ) {
	if ( $_GET['form_type'] === 'todo_add' ) {
		$todo   = $db->getData( 'todo' );
		$todo[] = [
			'title'       => $_GET['task_title'],
			'description' => $_GET['task_description'],
			'done'        => false
		];
		$db->storeData( 'todo', $todo );
		header( 'Location: /' );
	}
	if ( $_GET['form_type'] === 'todo_done' ) {
		$toDos                       = $db->getData( 'todo' );
		$to_do_key                   = $_GET['task_id'];
		$toDos[ $to_do_key ]['done'] = ! $toDos[ $to_do_key ]['done'];
		$db->storeData( 'todo', $toDos );
		header( 'Location: /' );
		
	}
	if ( $_GET['form_type'] === 'todo_delete' ) {
		$toDos     = $db->getData( 'todo' );
		$to_do_key = $_GET['task_id'];
		array_splice( $toDos, $to_do_key, 1 );
		
		$db->storeData( 'todo', $toDos );
		header( 'Location: / ' );
	}
}

$toDos = $db->getData( 'todo' );
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>To do app</title>
    <link href="style.css" type="text/css" rel="stylesheet">
</head>
<body>
<div class="to-do">
    <div class="to-do__container">
        <form class="to-do__form">
	        <input type="hidden" name="form_type" value="todo_add">
            <div class="to-do__form_title form_group">
                <label for="task_title">Task title</label>
                <input name="task_title" id="task_title">
            </div>
            <div class="to-do__form__description form_group">
                <label for="task_description">Task title</label>
                <textarea name="task_description" id="task_description"></textarea>
            </div>
            <div class="to-do__form__submit form_group">
                <button type="submit">Submit</button>
            </div>
        </form>
        
        <div class="to-do__list">
            <?php
            foreach ( $toDos as $key => $to_do ) {
	            ?>
                <div class="to-do__list__item">
                    <h2><?php echo $to_do['title']; ?></h2>
                    <p><?php echo $to_do['description']; ?></p>
                    <form class="to-do__list__item__form__check">
                        <label for="task_status_1">done</label>
                        <input type="hidden" name="form_type" value="todo_done">
                        <input type="hidden" name="task_id" value="<?php echo $key ?>">
                        <input type="checkbox" name="task_status" <?php echo $to_do['done'] ? ' checked ' : '' ?>
                               id="task_status_1" value="<?php echo $key ?>"
                               onChange="this.form.submit()">
                    </form>
                    <form class="to-do__list__item__form__delete">
                        <input type="hidden" name="form_type" value="todo_delete">
                        <input type="text" name="task_id" value="<?php echo $key?>">
                        <button>Delete</button>
                    </form>
                </div>
	            <?php
            }
            ?>

        </div>
    </div>
</div>

</body>
</html>
