create table students (
  id serial primary key,
  name text,
  course text,
  level int
);

insert into students (name, course, level) values
  ('Aoi', 'HTML', 1),
  ('Ken', 'JS', 3),
  ('Mai', 'CSS', 2),
  ('Sora', 'JS', 1);

    select name, course from students;
    select * from students where course = 'JS';
    select * from students where level >= 2;
    select * from students order by level desc;
    select * from students order by level desc, name;

--     select 列名	どの列を見るか
-- where 条件	どの行だけにするか
-- order by 列名 desc	並べる順番(desc = 高い順)