<?php if ( have_posts() ) : ?>
  <?php while ( have_posts() ) : the_post(); ?>
    <article>
      <h2><?php the_title(); ?></h2> 
      <p><?php the_excerpt(); ?></p>
      <a href="<?php the_permalink(); ?>">続きを読む</a>
    </article>
  <?php endwhile; ?>
<?php else : ?>
  <p>記事がありません</p>
<?php endif; ?>

<?php

Q1. the_post(); を消すとどうなる?(予想でOK) →同じ投稿だけ表示される
Q2. if ( ... ) : の : と endif; の ;、それぞれの役割は?(⚠️ : と ; の書き間違いに注意!);は。と同じ　:は、と同じ。
Q3. JS の forEach と似ている所はどこ?　if elseと同じ　foreachと同じ

?>