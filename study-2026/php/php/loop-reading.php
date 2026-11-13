
<?php //もし、投稿があったら : ?>
<?php if ( have_posts() ) : ?>
    <?php//投稿がある分だけ繰り返す : ?>
  <?php while ( have_posts() ) : the_post(); ?>
  <?php//タイトルを呼び出し :?>
    <h2><?php the_title(); ?></h2>
    <?php//本文を呼び出し :?>
    <div><?php the_content(); ?></div>
    <?php//while終わり : ?>
  <?php endwhile; ?>
  <?php //もし、投稿が何もなかったら : ?>
<?php else : ?>
    <?php//記事がありませんと表示 :?>
  <p>記事がありません</p>
<?php end; ?>

//if ( have_posts() ) : の最後の : は何の意味? if文の始まり
//endwhile; の最後が ; なのはなぜ? 終わりの意味。と同じ意味
//記事が0件のとき、画面には何が表示される? 記事がありませんと表示される
