-- テーブル作成
create table students (
id serial primary key,
name text,
course text,
level int
);

-- データ追加
insert into students (name, course, level) values
('Aoi', 'HTML', 1),
('Ken', 'JS', 3),
('Mai', 'CSS', 2),
('Sora', 'JS', 1);

-- Q1. 全員の名前とコースだけ表示
select name, course from students;

-- Q2. コースが JS の人だけ
select * from students where course = 'JS';

-- Q3. level が 2 以上の人
select * from students where level >= 2;

-- Q4. level が高い順に並べる
select * from students order by level desc;

-- おまけ:level が高い順、同じなら名前順
select * from students order by level desc, name;

-- まとめ
-- select 列名          どの列を見るか
-- where 条件           どの行だけにするか
-- order by 列名 desc   並べる順番(desc = 高い順)
