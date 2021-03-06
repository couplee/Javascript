alert('Hello World');

// 変数名の前にvarを付けることで、変数を宣言
var hello = 'Hello World';
alert(hello);

// 整数を代入するときは、以下のように記述します。変数名は、ここではint1
var int1 = 1;
alert(int1);

// 整数を代入する
var int1 = 1;
// 負数を代入する
var int2 = -10;
// 小数点を代入する
var float1 = 3.14;
// 文字列を代入する
var str1 = 'JavaScriptを覚えよう';

// 足し算
alert(4 + 3);
// 引き算
alert(8 - 5);
// 掛け算
alert(2 * 6);
// 割り算
alert(10 / 2);

// 文字列を結合する
alert('Hello' + 'World');
// それぞれの文字列を変数に格納して結合させます。
var str1 = 'Hello';
var str2 = 'World!!';
alert(str1 + str2);

// 条件分岐
var orange = 100;
var apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}

// 「while文」では、条件式が真（true）である間は繰り返し処理が実行されます。
// 繰り返される回数は決まっていません。
// 下記のwhile文では「1」を基準に「2」を掛け続けた場合、何回で「100」を超えるかを測定しています。
var max = 100;
var num = 1;
var count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// 一方、do...while文では、条件式のtrue／falseに関わらず、最初の1回だけは必ず処理が行われます。
// その後、条件式を評価して、繰り返し処理を続けるか／抜けるかを決めていきます。
// do{
  // 最低1回は行われる処理
// }while(条件式);

// 「for文」は、決められた回数の処理を繰り返すときに使う。for文を書くときは、以下の部分に注意する必要がある。
// ・「繰り返す回数」を初期値で設定する
// ・「条件を満たす場合の処理」を記述する
// for文は、「10回まで繰り返し」などのように、決められた回数内で繰り返し処理を行いたい場合に使われます。
// for文を使って、数字を「1」から「10」まで足し算を行い、その結果を表示する処理を書いてみましょう。
// for ( 初期値; 条件式; 増減値 ){
  // 繰り返し処理
// }

var i;
var num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');

// 確認問題
alert('1+2は' + (1 + 2) + 'です');
alert('1-2は' + (1 - 2) + 'です');
alert('1×2は' + (1 * 2) + 'です');
alert('1÷2は' + (1 / 2) + 'です');

