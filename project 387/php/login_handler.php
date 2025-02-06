<?php
session_start();
require '../connect.php';

$username = $_POST['username'];
$_SESSION["username"] = "$username";

$password = $_POST['password'];
// Remove this line

$query = 'select exists (select 1 from Organizer where Username = ? and Password = ?)';
$statement = $dbConn->prepare($query);
$statement->execute([$username, md5($password)]);
$organizerResults = $statement->fetch();

if ($organizerResults['exists'] == 1) {
    $query = 'select OrganizerID from Organizer where Username = ? and Password = ?';
    $statement = $dbConn->prepare($query);
    $statement->execute([$username, md5($password)]);
    $organizerID = $statement->fetch();
    $_SESSION["OrganizerID"] = "$organizerID";
    header("Location: ../HTML/dashboard.html");
    die();
} else {
    $query = 'select exists (select 1 from Worker where Username = ? and Password = ?)';
    $statement = $dbConn->prepare($query);
    $statement->execute([$username, md5($password)]);
    $workerResults = $statement->fetch();

    if ($workerResults['exists'] == 1) {
        $query = 'select WorkerID from Worker where Username = ? and Password = ?';
        $statement = $dbConn->prepare($query);
        $statement->execute([$username, md5($password)]);
        $workerID = $statement->fetch();
        $_SESSION["WorkerID"] = $workerID['WorkerID'];
        header("Location: https://example.com/myOtherPage.php");
        die();
    } else {
        $query = 'select exists (select 1 from Attendee where Username = ? and Password = ?)';
        $statement = $dbConn->prepare($query);
        $statement->execute([$username, $password]);
        $attendeeResults = $statement->fetch();

        if($attendeeResults['exists'] == 1) {
            $query = 'select AttendeeID from Attendee where Username = ? and Password = ?';
            $statement = $dbConn->prepare($query);
            $statement->execute([$username, $password]);
            $attendeeID = $statement->fetch();
            $_SESSION["AttendeeID"] = $attendeeID['AttendeeID'];
            header("Location: https://example.com/myOtherPage.php");
            die();
        } else {
            // Handle invalid login
            header("Location: login_page.html?error=invalid");
            die();
        }
    }
}

