<html>

<body>
    <form action="login.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>
        <label for="password">Password:</label>
        <input type="password" id="text" name="password" required><br><br>
        <button type="submit">Login</button>
    </form>
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "security";
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $user = $_POST['username'];
        $pass = $_POST['password'];

        $sql = "SELECT * FROM users WHERE username = '$user' AND password = '$pass'";

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo "Login successful!<br>";

            while ($row = $result->fetch_assoc()) {
                echo "Username: " . htmlspecialchars($row['username']) . "<br>";
                echo "Password: " . htmlspecialchars($row['password']) . "<br>";
                echo "<br>";
            }
        } else {
            echo "Invalid username or password!";
        }
    }
    $conn->close();
    ?>
</body>

</html>