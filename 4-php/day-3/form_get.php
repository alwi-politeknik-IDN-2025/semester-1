<?php
// Ambil data dengan GET
$nama = isset($_GET["nama"]) ? $_GET["nama"] :"";
$umur = isset($_GET["umur"]) ? $_GET["umur"] : "";
?>
<form method='get'>
    Nama: <input type="text" name="nama"><br>
    Umur: <input type="number" name="umur"><br>
    <button type="submit">Kirim</button>
</form>

<?php
if ($nama && $umur) {
    echo "Halo, $nama! umurmu $umur tahun.";
}