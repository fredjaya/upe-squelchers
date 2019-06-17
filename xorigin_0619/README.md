# X-origin (June 19)
Run on:
```
macOS Mojave
version 10.14.5
Processor 1.8 GHz Intel Core i5
Memory 8 GB 1600 MHz DDR3

python --version
Python 2.7.10

java -version
java version "1.8.0_152"
Java(TM) SE Runtime Environment (build 1.8.0_152-b16)
Java HotSpot(TM) 64-Bit Server VM (build 25.152-b16, mixed mode)

cmake -version
cmake version 3.14.1

wine-4.0
```

# Installation
#### X-origin
```
git clone https://github.com/KnowlesLab/X-ORGIN
```

#### PGDSpider
```
curl http://www.cmpg.unibe.ch/software/PGDSpider/PGDSpider_2.1.1.5.zip -o PGDSpider_2.1.1.5.zip
tar xvf PGDSpider_2.1.1.5.zip
```

#### Arlequin (windows GUI)
* Potentially unnecessary
```
curl http://cmpg.unibe.ch/software/arlequin35/win/WinArl35.zip -o WinArl35.zip
tar xvf WinArl35.zip
```

#### Arlequin (OSX CLI)
```
curl http://cmpg.unibe.ch/software/arlequin35/macosx/arlsumstat_macosx.zip -o arlsumstat_macosx.zip
tar xvf arlsumstat_macosx.zip
```

#### SPLATCHE3 (OSX)
```
curl http://www.splatche.com/download/SPLATCHE3-MacOs-64b.zip -o SPLATCHE3-MacOs-64b.zip
tar xvf SPLATCHE3-MacOs-64b.zip
```

#### ABCtoolbox
```
git clone https://github.com/sakeel/ABCtoolbox.git
cd ABCtoolbox
cmake -H. -Bbuild
cmake --build ./build
find ./build/source -type f -perm +111 -print
```
Note - compilation issue in `ABCestimator/newmat6.cpp`, `ABCsampler/newmat6.cpp` and `glm/newmat6.cpp`:
```
error: ordered comparison between pointer and zero ('int *' and 'int')
  if (indx > 0) { delete [] indx; indx = 0; }
```
Fix: `(indx > (int *)0)`

## 1. Transform Maps
#### Borealis
```
cd 1_transformMaps
python asc2dynKF.py -a borealis_lgm_downscale.asc -c borealis_current_downscale.asc
```
suitable cell number in LGM is  811  
number of unique classes is  58

#### Inundata
```
python asc2dynKF.py -a inundata_lgm_downscale.asc -c inundata_current_downscale.asc
```

suitable cell number in LGM is  1419  
number of unique classes is  81

## 2. Write gene seq file
```
cd 2_writeGeneSeqFile
python writeGeneSeqFile.py 1000 24 #borealis
python writeGeneSeqFile.py 1000 26 #inundata
```
Generated files moved to respective folders in 4.

## 3. Arlequin sumstats
#### PGDSpider to prepare SNP data for arlequin (.arp) input
Generate .str for:
  * borealis `pgdspider/2_str2arp_borealis.R`
  * inundata `pgdspider/2_str2arp_inundata.R`

PGDSpider GUI (`PGDSpider_2.1.1.5/PGDSpider2.jar`):
  * Generate SPID file `pgdspider/upe_str2arp.SPID`
  * Convert `borealis.str > borealis.arp`
  * Convert `inundata.str > inundata.arp`

#### Arlequin to generate .obs file for ABCSampler(?) input
Note: binary and all input files must be in the same directory to work. (Chronological numbering of files (ssdef.txt, arl_run.ars) n/a here)

```
cd 3_arlsumstat
# Arlequin GUI not run, example files used
cp X-ORGIN/example/calSumStat/arl_run.ars .
cp X-ORGIN/example/calSumStat/ssdefs.txt .
./arlsumstatmac_64bit 3_borealis.arp 4_sumstats_borealis.obs 0 1
./arlsumstatmac_64bit 3_inundata.arp 4_sumstats_inundata.obs 0 1
rm randseed.txt
```

## 4. ABCSampler
X-origin `ABCSampler` and `splatche2` binaries are compiled for linux:
```
file ABCsampler
ABCsampler: ELF 32-bit LSB executable, Intel 80386, version 1 (SYSV), dynamically linked, interpreter /lib/ld-, for GNU/Linux 2.6.8, with debug_info, not stripped

file splatche2-01_lin_64
splatche2-01_lin_64: ELF 64-bit LSB executable, x86-64, version 1 (GNU/Linux), statically linked, for GNU/Linux 2.6.15, BuildID[sha1]=82e4421b2c0c11289231c15dc00b03b92ac4c0fb, not stripped
```

### 4a. borealis
#### Prep
```
cd 4_ABCSampler/1_splatcheBorealis/
cp ../../3_arlsumstat/4_sumstats_borealis.obs .
cp X-ORGIN/example/splatche2input/toy_linux.input ./borealis_linux.input
cp X-ORGIN/example/splatche2input/toy.est ./borealis.input
cp X-ORGIN/example/splatche2input/calSumStat/calSumStat.py . #unchanged
cp X-ORGIN/example/splatche2input/2-dens_init.txt . #unchanged
cp X-ORGIN/example/splatche2input/1-settings.txt .
```

#### ABCsampler
