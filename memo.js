//JavaScript メモゾーン

document.write(

    "=JavaScript=<br><br>"+

    "各コマンドの引数の末尾の&lt;br>は無視される．<br>"+
    "但し\\tは有効<br><br>"+
   
    "\\n，文頭の\\t，文中の空白，コマンド末の&lt;br>&ensp;は無視される<br><br>"+
   
    "変数に代入するテキストを複数行にするには，各行毎に\"\"でくくり +で繋ぐ<br><br>"
   
);


//clock.html


document.write("日付や時刻：Date()<br>var d = new Date();<br>※生成したときの時刻<br><br>");

document.write(
    "1秒(1000ms)毎に同じ処理を行う：<br>"+
    "window.onload = function(){<br>"+
    "&ensp;setInterval(function(){<br>"+
    "&ensp;&ensp;<i>statements</i><br>"+
    "&ensp;}, 1000);<br>"+
    "}<br>"+

    "※但し，表示したければinnerHTMLを使うべき．<br>"+
    "(この中にdocument.write()を入れると，上書きせず追記していくので注意．)<br><br>"
);

window.onload = function(){

  var ds;

  setInterval( function(){

    var d = new Date();

    document.getElementById("clock").innerHTML = 
      "window.onload = function(){<br>"+

      "&ensp;var ds;<br>"+

      "&ensp;setInterval( function(){<br>"+

      "&ensp;&ensp;var d = new Date();<br>"+
      "&ensp;&ensp;document.getElementById(\"clock\").innerHTML =\"\" + d.toLocaleString(); <br>"+

      "&ensp;},1000);<br>"+

      "}<br>"+

      d.toLocaleString();

  },1000);

}
     

//構文勉強


document.write(
    "&lt;変数><br>"+
    "var: 変数の使用開始を明示的に宣言する<br>"+
    "let: ブロック内で有効な局所変数．これを用いれば，ループ変数をより安全に使用できる．<br>"+
    "const: 代入を許さない<br>"+
    "型注釈が存在しないので，基本const，どうしても変更が発生する場合let．varは駄目．<br><br>"+

    "&lt;構文><br>"+
    "if,else,switch,while,do,forはJavaとかと同じ<br><br>"+

    "for(<i>variable</i> in <i>array</i>) <i>statements</i>: 配列(<i>array</i>)のすべての要素に対して処理を行う<br>"+
    "(<i>array</i>にオブジェクトを入れると，オブジェクトがもつ属性の一覧を調べることができる(DontEnum属性を持つ属性は調べられない))<br><br>"+

    "for(<i>variable</i>of<i>iterable</i>) <i>statements</i>: イテラブルなオブジェクトに対してループ<br><br>"+

    "break (<i>label</i>): ループを抜ける．<i>label</i>を指定した場合，該当の層の外まで抜ける.<br>"+
    "continue (<i>label</i>): ループを続ける(次の回に飛ばす)．<i>label</i>を指定した場合，該当の層の次の回に飛ぶ．<br>"+
    "<i>label: </i>: 指定したい層の始まる手前に入れる．<br><br>"+

    "with (<i>obj</i>) <i>statements</i>: オブジェクト(<i>obj</i>)について処理を行う．(オブジェクトの.以下の要素の指定だけで操作が行える．オブジェクト名を省略できる．)<br><br>"+

    "try {...} catch (...){...} finally {...}: tryの中でthrowで例外が投げられると，tryの残りはスキップされ，catch{}の処理が行われる．finally{...}の処理は例外の有無にかかわらず行われる．<br><br>"+

    "&lt;モジュール><br>"+
    "export: 公開する関数や変数をexportを付けて宣言する．<br>"+
    "&ensp;const x = 9;<br>"+
    "import: exportされた関数を読み込む．<br>"+
    "&ensp;import \"hoge.js\";&emsp;&emsp;//hoge.jsからexportされているものを全てimportする．<br>"+
    "&ensp;import { a, b } from \"hoge.js\";&emsp;&emsp;//hoge.jsからaとbをimportする．<br>"+
    "&ensp;import { a as A, b as B } \"hoge.js\";&emsp;&emsp;//hoge.jsからaをA，bをBという名前でimportする．<br>"+
    "&ensp;import * as mod from \"hoge.js\";&emsp;&emsp;//hoge.jsからmodという名前でimportする(mod.a，mod.b，...)<br>"+
    "importを行った.jsファイルは，HTMLファイルから呼び出すときにtype=\"module\"属性を付与する必要がある．<br><br>"+

    "<br>"+
    "<br><br>"+

    "<br>"+
    "<br><br>"
    );
