
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:////Users/13444841/GitHub/upe-squelchers/xorigin_0619/3_arlsumstat/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (3_inundata.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 17/06/19 at 14:22:48", "3_inundata.htm#17_06_19at14_22_48"))
	insDoc(aux1, gLnk("R", "Settings", "3_inundata.htm#17_06_19at14_22_48_run_information"))
		aux2 = insFld(aux1, gFld("Samples", ""))
		insDoc(aux2, gLnk("R", "pop_I1_12", "3_inundata.htm#17_06_19at14_22_48_group0"))
		insDoc(aux2, gLnk("R", "pop_I1_8", "3_inundata.htm#17_06_19at14_22_48_group1"))
		insDoc(aux2, gLnk("R", "pop_I1_10", "3_inundata.htm#17_06_19at14_22_48_group2"))
		insDoc(aux2, gLnk("R", "pop_I1_5", "3_inundata.htm#17_06_19at14_22_48_group3"))
		insDoc(aux2, gLnk("R", "pop_I1_3", "3_inundata.htm#17_06_19at14_22_48_group4"))
		insDoc(aux2, gLnk("R", "pop_I2_18", "3_inundata.htm#17_06_19at14_22_48_group5"))
		insDoc(aux2, gLnk("R", "pop_I1_9", "3_inundata.htm#17_06_19at14_22_48_group6"))
		insDoc(aux2, gLnk("R", "pop_I2_17", "3_inundata.htm#17_06_19at14_22_48_group7"))
		insDoc(aux2, gLnk("R", "pop_I1_4", "3_inundata.htm#17_06_19at14_22_48_group8"))
		insDoc(aux2, gLnk("R", "pop_I1_1", "3_inundata.htm#17_06_19at14_22_48_group9"))
		insDoc(aux2, gLnk("R", "pop_I2_15", "3_inundata.htm#17_06_19at14_22_48_group10"))
		insDoc(aux2, gLnk("R", "pop_I1_2", "3_inundata.htm#17_06_19at14_22_48_group11"))
		insDoc(aux2, gLnk("R", "pop_I1_11", "3_inundata.htm#17_06_19at14_22_48_group12"))
		insDoc(aux2, gLnk("R", "pop_I2_16", "3_inundata.htm#17_06_19at14_22_48_group13"))
		insDoc(aux2, gLnk("R", "pop_I1_14", "3_inundata.htm#17_06_19at14_22_48_group14"))
		insDoc(aux2, gLnk("R", "pop_I1_7", "3_inundata.htm#17_06_19at14_22_48_group15"))
		insDoc(aux2, gLnk("R", "pop_IH", "3_inundata.htm#17_06_19at14_22_48_group16"))
		insDoc(aux2, gLnk("R", "pop_I1_6", "3_inundata.htm#17_06_19at14_22_48_group17"))
		insDoc(aux2, gLnk("R", "pop_I1_13", "3_inundata.htm#17_06_19at14_22_48_group18"))
		aux2 = insFld(aux1, gFld("Within-samples summary", ""))
		insDoc(aux2, gLnk("R", "Basic indices", "3_inundata.htm#17_06_19at14_22_48_comp_sum_Basic"))
		insDoc(aux2, gLnk("R", "Heterozygosity", "3_inundata.htm#17_06_19at14_22_48_comp_sum_het"))
		insDoc(aux2, gLnk("R", "No. of alleles", "3_inundata.htm#17_06_19at14_22_48_comp_sum_numAll"))
		insDoc(aux2, gLnk("R", "Molecular diversity", "3_inundata.htm#17_06_19at14_22_48_comp_sum_moldiv"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "3_inundata.htm#17_06_19at14_22_48_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "3_inundata.htm#17_06_19at14_22_48_pop_pairw_diff"))
