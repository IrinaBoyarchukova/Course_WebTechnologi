-- Создать файл my.sql, в котором должна создаваться таблица 
-- с информацией об одногруппниках. В таблице должно быть четыре поля:
--  id, name, age, address. Все поля в таблице обязательны для заполнения.
-- Необходимо добавить 5-10 одногруппников в данную таблицу.
-- Необходимо написать запрос на получение имен всех одногруппников
-- (только имен, без всего остального), которые живут в Москве и их
--  возраст находится в диапазоне [18, 30) лет. 
-- Примечание:
-- Квадратные скобки при указании диапазона, означают "включительно", 
-- а круглые "не включительно", то есть диапазон (7, 9] означает "от 7, 
-- где 7 не попадает в данный диапазон, до 9 включительно". Такой синтаксис 
-- нельзя использовать в sql, вам нужно найти решение, как такое условие можно
-- записать в sql по-другому.
-- Для проверок работы своего скрипта можете использовать свою базу 
-- данных, либо используйте сайт: https://onecompiler.com/mysql
-- create

-- create
CREATE TABLE EMPLOYEE (
  empId INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age TEXT NOT NULL,
  adress TEXT NOT NULL
);

-- insert
INSERT INTO EMPLOYEE VALUES (0001, 'Ирина', '16','Moskva');
INSERT INTO EMPLOYEE VALUES (0002, 'Дмитрий', '8','Moskva');
INSERT INTO EMPLOYEE VALUES (0003, 'Анна', '18','Moskva');
INSERT INTO EMPLOYEE VALUES (0004, 'Юля', '30','Moskva');
INSERT INTO EMPLOYEE VALUES (0005, 'Иван', '29','Moskva');
INSERT INTO EMPLOYEE VALUES (0006, 'Павел', '28','Moskva');
INSERT INTO EMPLOYEE VALUES (0007, 'Денис', '8','Санкт-Петербург');
INSERT INTO EMPLOYEE VALUES (0008, 'Марина', '60','Moskva');
INSERT INTO EMPLOYEE VALUES (0009, 'Анжела', '8','Санкт-Петербург');
INSERT INTO EMPLOYEE VALUES (0010, 'Софья', '10','Moskva');
INSERT INTO EMPLOYEE VALUES (0011, 'Андрей', '8','Санкт-Петербург');

-- fetch 
SELECT name FROM EMPLOYEE WHERE adress = 'Moskva' AND (age >= 18 AND  age < 30);
