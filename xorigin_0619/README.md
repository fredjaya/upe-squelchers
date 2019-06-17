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

```
cd 3_arlsumstat
cp X-ORGIN/example/calSumStat/arl_run.ars .
```

## 4. splatche
X-origin binary is compiled for linux:
```
cp ~/GitHub/X-ORGIN/example/splatche2input/splatche2-01_lin_64 .
./splatche2-01_lin_64
-bash: ./splatche2-01_lin_64: cannot execute binary file
chmod 744 splatche2-01_lin_64
SCIHDR2019001:4_splatcheBorealis 13444841$ ./splatche2-01_lin_64
-bash: ./splatche2-01_lin_64: cannot execute binary file
file splatche2-01_lin_64
splatche2-01_lin_64: ELF 64-bit LSB executable, x86-64, version 1 (GNU/Linux), statically linked, for GNU/Linux 2.6.15, BuildID[sha1]=82e4421b2c0c11289231c15dc00b03b92ac4c0fb, not stripped
```

### 4a. borealis
```
cd 4_splatcheBorealis/
mv ../SPLATCHE3-MacOs-64b.zip .
cp X-ORGIN/example/splatche2input/calSumStat/calSumStat.py .
cp X-ORGIN/example/splatche2input/2-dens_init.txt .
cp X-ORGIN/example/splatche2input/1-settings.txt .
```
  * Changed paths
  * All param settings unchanged
```
cp X-ORGIN/example/toy.est .
cp X-ORGIN/example/toy_linux.input .
```
  * Renaming paths
