<?php
// Ambil data dengan GET
$nama = isset($_GET["nama"]) ? $_GET["nama"] :"";
$hobi = isset($_GET["hobi"]) ? $_GET["hobi"] : "";
?>
<form method='post'>
    Nama: <input type="text" name="nama"><br>
    Hobi: <input type="text" name="hobi"><br>
    <button type="submit">Kirim</button>
</form>

<?php
if ($nama && $hobi) {
    echo "Halo, $nama! hobimu adalah $hobi.";
}