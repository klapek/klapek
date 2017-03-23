<?
# Licznik klikniêæ na link v-0.01
# Autor: Adam "Logicman" Sobociñski 
# www.iportal.prv.pl
# Kontakt: admin@iportal.prv.pl
#
# Program jest bezp³atny. 
# Mo¿esz go dowolnie zmieniaæ
# i modyfikowaæ, ale musisz 
# pozostawiæ informcjê, 
# sk¹d pochodzi ten skrypt
#
# Uwaga! Autor nie odpawiada za
# nieprawid³owe lub z³e dzia³anie skryptu.

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