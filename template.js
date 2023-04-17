function getTemplate(tableRows) {
    return `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Medium Bookmarks</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.3/css/dataTables.bootstrap4.min.css"/>
</head>
<body>
<div class="container mt-4 mb-4">
    <h2>AliAnilKocak Medium</h2>
    <table id="bookmark" class="table table-striped table-bordered " style="width:100%">
        <thead>
        <tr>
            <th>Başlık</th>
            <th>Tarih</th>
        </tr>
        </thead>
        <tbody>
        ${tableRows}
        </tbody>
    </table>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
<script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.11.3/js/dataTables.bootstrap4.min.js"></script>

<script>
    $(document).ready(function () {
            $('#bookmark').DataTable({
                language: {
                    search: "Arama",
                    lengthMenu: "Sayfa başına _MENU_ kayıt göster",
                    zeroRecords: "Eşleşen kayıt bulunamadı",
                    info: "_TOTAL_ kayıttan _START_ - _END_ arası gösteriliyor",
                    infoEmpty: "Kayıt yok",
                    infoFiltered: "(_MAX_ kayıt içinde filtrelendi)",
                    paginate: {
                        first: "İlk",
                        last: "Son",
                        next: "Sonraki",
                        previous: "Önceki"
                    }
                },
                "order": [[1, "desc"]],
                "pageLength": 50,
            });
        }
    );
</script>
</body>
</html>`;
}

module.exports = getTemplate