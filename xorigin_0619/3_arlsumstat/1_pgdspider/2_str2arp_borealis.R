#install.packages("dartR")
#install.packages("BiocManager")
#BiocManager::install("SNPRelate")
#BiocManager::install("qvalue")

library(dartR)

# Define function
gl.filter.maf <- function (gl, t , q )
{
  x <- gl
  if (class(x) == "genlight") {
    cat("Reporting for a genlight object\\n")
  }
  else {
    cat("Fatal Error: Specify a genlight object\\n")
    stop()
  }
  n0 <- nLoc(x)
  cat("Initial no. of loci =", n0)

  af <- (colMeans(as.matrix(x), na.rm = T)/2 )
  index  <- (af>t) & (af<q)
  index <- ifelse(is.na(index),FALSE, index)
  x2 <- x[, index]
  x2@other$loc.metrics <- x2@other$loc.metrics[index, ]

  cat("No. of loci deleted =", (n0 - nLoc(x2)))

  cat("Summary of filtered dataset")
  cat(paste("  Reproducibility >=", t))
  cat(paste("  No. of loci:", nLoc(x2)))
  cat(paste("  No. of individuals:", nInd(x2)))
  cat(paste("  No. of populations: ", length(levels(factor(pop(x2)))),
            "\\n"))
  return(x2)
}

setwd("~/Dropbox/xorigin_0619/3_arlsumstat/pgdspider/")
gl <- gl.read.dart(filename = "0_Report_DUp16-2269_SNP_singlerow_2.csv",
                   covfilename =  "0_metadata2.csv", probar = TRUE)
gl2 <- gl.edit.recode.pop(gl) #Recode for borealis
gl2 <- gl.filter.monomorphs(gl2) #Remove monomorphic and missing allele
gl3 <- gl.filter.callrate(gl2, method = "loc", threshold = 0.99) #Filter loci call rate
gl4 <- gl.filter.callrate(gl3, method="ind", threshold = 0.99) #Filter individual call rate
gl5 <- gl.filter.repavg(gl4, t=1) #Filter by reproducibility of 1
gl6 <- gl.filter.maf(gl5, t= 0.05, q =0.95) #Set minor allele frequency
rm(gl2, gl3, gl4, gl5)

# Write Structure input file
gl2structure(gl6, addcolumns = gl6@pop, outfile = "3_borealis.str", outpath = ".")
