
USETEXTLINKS = 1
STARTALLOPEN = 0
WRAPTEXT = 1
PRESERVESTATE = 0
HIGHLIGHT = 1
ICONPATH = 'file:////Users/13444841/GitHub/upe-squelchers/xorigin_0619/3_arlsumstat/'    //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>ARLEQUIN RESULTS (3_borealis.arp)</i>", "")
insDoc(foldersTree, gLnk("R", "Arlequin log file", "Arlequin_log.txt"))
	aux1 = insFld(foldersTree, gFld("Run of 17/06/19 at 14:22:25", "3_borealis.htm#17_06_19at14_22_25"))
	insDoc(aux1, gLnk("R", "Settings", "3_borealis.htm#17_06_19at14_22_25_run_information"))
		aux2 = insFld(aux1, gFld("Samples", ""))
		insDoc(aux2, gLnk("R", "pop_B3_5", "3_borealis.htm#17_06_19at14_22_25_group0"))
		insDoc(aux2, gLnk("R", "pop_B1_1", "3_borealis.htm#17_06_19at14_22_25_group1"))
		insDoc(aux2, gLnk("R", "pop_B3_1", "3_borealis.htm#17_06_19at14_22_25_group2"))
		insDoc(aux2, gLnk("R", "pop_B1_5", "3_borealis.htm#17_06_19at14_22_25_group3"))
		insDoc(aux2, gLnk("R", "pop_B2_2", "3_borealis.htm#17_06_19at14_22_25_group4"))
		insDoc(aux2, gLnk("R", "pop_B1_2", "3_borealis.htm#17_06_19at14_22_25_group5"))
		insDoc(aux2, gLnk("R", "pop_B3_3", "3_borealis.htm#17_06_19at14_22_25_group6"))
		insDoc(aux2, gLnk("R", "pop_B2_1", "3_borealis.htm#17_06_19at14_22_25_group7"))
		insDoc(aux2, gLnk("R", "pop_B1_3", "3_borealis.htm#17_06_19at14_22_25_group8"))
		insDoc(aux2, gLnk("R", "pop_B1_4", "3_borealis.htm#17_06_19at14_22_25_group9"))
		insDoc(aux2, gLnk("R", "pop_B3_4", "3_borealis.htm#17_06_19at14_22_25_group10"))
		insDoc(aux2, gLnk("R", "pop_B3_6", "3_borealis.htm#17_06_19at14_22_25_group11"))
		insDoc(aux2, gLnk("R", "pop_B3_8", "3_borealis.htm#17_06_19at14_22_25_group12"))
		insDoc(aux2, gLnk("R", "pop_B3_7", "3_borealis.htm#17_06_19at14_22_25_group13"))
		insDoc(aux2, gLnk("R", "pop_B3_2", "3_borealis.htm#17_06_19at14_22_25_group14"))
		aux2 = insFld(aux1, gFld("Within-samples summary", ""))
		insDoc(aux2, gLnk("R", "Basic indices", "3_borealis.htm#17_06_19at14_22_25_comp_sum_Basic"))
		insDoc(aux2, gLnk("R", "Heterozygosity", "3_borealis.htm#17_06_19at14_22_25_comp_sum_het"))
		insDoc(aux2, gLnk("R", "No. of alleles", "3_borealis.htm#17_06_19at14_22_25_comp_sum_numAll"))
		insDoc(aux2, gLnk("R", "Molecular diversity", "3_borealis.htm#17_06_19at14_22_25_comp_sum_moldiv"))
		aux2 = insFld(aux1, gFld("Genetic structure (samp=pop)", "3_borealis.htm#17_06_19at14_22_25_pop_gen_struct"))
		insDoc(aux2, gLnk("R", "Pairwise distances", "3_borealis.htm#17_06_19at14_22_25_pop_pairw_diff"))
