let input_range_start=0;
let input_range_end=0;
let guess_number=null;
let pickup_number=null;

function start_game() {
    input_range_start= parseInt(prompt('Nhập vào số đầu tiên trong khoảng muốn đoán số'));
    input_range_end = parseInt(prompt('Nhập vào số cuối cùng trong khoảng muốn đoán số'));
    pickup_number=(Math.floor(Math.random()*(input_range_end-input_range_start))+input_range_start);
    pickup_number=parseInt(pickup_number);
    guess_number=parseInt(prompt('Hãy nhập số mà bạn muốn đoán. Trong khoảng từ '+input_range_start+' đến '+input_range_end));

    let i =1;
for (i=1; i<=3; i++) {
    console.log(i + " " + guess_number + " " + pickup_number);

    if(guess_number==pickup_number) {
        alert('Chúc mừng bạn đã đoán đúng');
        break;
    }
    if (guess_number>pickup_number){
         alert('Bạn đã đoán LỚN hơn đáp án. Vui lòng đoán lại. Bạn còn '+(3-i)+' lượt đoán.');
         if(i<3){
             guess_number=parseInt(prompt('Hãy nhập số mà bạn muốn đoán. Trong khoảng từ '+input_range_start+' đến '+input_range_end));
         continue;
         }else {
             alert('Ban da het luot doan');
         }
    }
    if (guess_number<pickup_number){
         alert('Bạn đã đoán NHỎ hơn đáp án. Vui lòng đoán lại. Bạn còn '+(3-i)+' lượt đoán');
        if(i<3){
            guess_number=parseInt(prompt('Hãy nhập số mà bạn muốn đoán. Trong khoảng từ '+input_range_start+' đến '+input_range_end));
        continue;
        }else {
            alert('Bạn đã hết lượt đoán');
        }
    }
   // alert('Ban da het luot doan');
}
}