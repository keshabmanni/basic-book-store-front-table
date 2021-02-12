$.ajax({
    url: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        for (var i=0; i<data.length; i++) {
            var row = $('<tr><td>' + data[i].title+ '</td><td>' + data[i].authors + '</td><td>' + data[i].average_rating +'('+ data[i].ratings_count+ ')' + '</td><td> &#8377; ' + data[i].price + ' </td><td>'+ '<a class="waves-effect waves-light btn z-depth-0">Add to Cart</a>' +'</td></tr>');
            $('#bookTable').append(row);
        }
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});