<?
# Licznik klikni�� na link v-0.01
# Autor: Adam "Logicman" Soboci�ski 
# www.iportal.prv.pl
# Kontakt: admin@iportal.prv.pl
#
# Program jest bezp�atny. 
# Mo�esz go dowolnie zmienia�
# i modyfikowa�, ale musisz 
# pozostawi� informcj�, 
# sk�d pochodzi ten skrypt
#
# Uwaga! Autor nie odpawiada za
# nieprawid�owe lub z�e dzia�anie skryptu.

# download
$lines=file("download.dat");
$stan=0;
for($n=0; $n<count($lines); $n++)
{
 $str=explode(",",$lines[$n]); 
if(chop($str[1])=="$id")
  {
   settype($str[0],"integer");
	$str[0]++;
   $lines[$n]=implode(",",$str);
   $stan=1;
 }
}

  $plik=fopen("download.dat","w");
  flock($plik,2);
  if($stan==0) fputs($plik,"1,$id\n");
  for($n=0; $n<count($lines); $n++) fputs($plik,chop($lines[$n])."\n");
  flock($plik,3);
  fclose($plik);
  header("Location: $id");
?>