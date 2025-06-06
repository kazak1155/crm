(function (a) {
	a.jgrid = a.jgrid || {};
	a.extend(a.jgrid, {
		defaults: {
			recordtext: "Visualizzati {0} - {1} di {2}",
			emptyrecords: "Nessun record da visualizzare",
			loadtext: "Caricamento...",
			pgtext: "Pagina {0} di {1}"
		},
		search: {
			caption: "Ricerca...",
			Find: "Cerca",
			Reset: "Pulisci",
			odata: [{
				oper: 'eq',
				text: "uguale"
			}, {
				oper: 'ne',
				text: "diverso"
			}, {
				oper: 'lt',
				text: "minore"
			}, {
				oper: 'le',
				text: "minore o uguale"
			}, {
				oper: 'gt',
				text: "maggiore"
			}, {
				oper: 'ge',
				text: "maggiore o uguale"
			}, {
				oper: 'bw',
				text: "inizia con"
			}, {
				oper: 'bn',
				text: "non inizia con"
			}, {
				oper: 'in',
				text: "in"
			}, {
				oper: 'ni',
				text: "non in"
			}, {
				oper: 'ew',
				text: "termina con"
			}, {
				oper: 'en',
				text: "non termina con"
			}, {
				oper: 'cn',
				text: "contiene"
			}, {
				oper: 'nc',
				text: "non contiene"
			}, {
				oper: 'nu',
				text: 'is null'
			}, {
				oper: 'nn',
				text: 'is not null'
			}],
			groupOps: [{
				op: "AND",
				text: "tutto"
			}, {
				op: "OR",
				text: "almeno uno"
			}],
			operandTitle: "Click to select search operation.",
			resetTitle: "Reset Search Value"
		},
		edit: {
			addCaption: "Aggiungi Record",
			editCaption: "Modifica Record",
			bSubmit: "Invia",
			bCancel: "Chiudi",
			bClose: "Chiudi",
			saveData: "Alcuni dati modificati! Salvare i cambiamenti?",
			bYes: "Si",
			bNo: "No",
			bExit: "Esci",
			msg: {
				required: "Campo richiesto",
				number: "Per favore, inserisci un valore valido",
				minValue: "il valore deve essere maggiore o uguale a ",
				maxValue: "il valore deve essere minore o uguale a",
				email: "e-mail non corretta",
				integer: "Per favore, inserisci un numero intero valido",
				date: "Per favore, inserisci una data valida",
				url: "URL non valido. Prefisso richiesto ('http://' or 'https://')",
				nodefined: " non  definito!",
				novalue: " valore di ritorno richiesto!",
				customarray: "La function custon deve tornare un array!",
				customfcheck: "La function custom deve esistere per il custom checking!"
			}
		},
		view: {
			caption: "Visualizzazione Record",
			bClose: "Chiudi"
		},
		del: {
			caption: "Cancella",
			msg: "Cancellare record selezionato/i?",
			bSubmit: "Cancella",
			bCancel: "Annulla"
		},
		nav: {
			edittext: " ",
			edittitle: "Modifica record selezionato",
			addtext: " ",
			addtitle: "Aggiungi nuovo record",
			deltext: " ",
			deltitle: "Cancella record selezionato",
			searchtext: " ",
			searchtitle: "Ricerca record",
			refreshtext: "",
			refreshtitle: "Aggiorna griglia",
			alertcap: "Attenzione",
			alerttext: "Per favore, seleziona un record",
			viewtext: "",
			viewtitle: "Visualizza riga selezionata"
		},
		col: {
			caption: "Mostra/Nascondi Colonne",
			bSubmit: "Invia",
			bCancel: "Annulla"
		},
		errors: {
			errcap: "Errore",
			nourl: "Url non settata",
			norecords: "Nessun record da elaborare",
			model: "Lunghezza di colNames &lt;&gt; colModel!"
		},
		formatter: {
			integer: {
				thousandsSeparator: " ",
				defaultValue: "0"
			},
			number: {
				decimalSeparator: ",",
				thousandsSeparator: " ",
				decimalPlaces: 2,
				defaultValue: "0,00"
			},
			currency: {
				decimalSeparator: ",",
				thousandsSeparator: " ",
				decimalPlaces: 2,
				prefix: "",
				suffix: "",
				defaultValue: "0,00"
			},
			date: {
				dayNames: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Domenica", "Luned", "Marted", "Mercoled", "Gioved", "Venerd", "Sabato"],
				monthNames: ["Gen", "Feb", "Mar", "Apr", "Mag", "Gui", "Lug", "Ago", "Set", "Ott", "Nov", "Dic", "Genneio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Movembre", "Dicembre"],
				AmPm: ["am", "pm", "AM", "PM"],
				S: function (b) {
					return b < 11 || b > 13 ? ["st", "nd", "rd", "th"][Math.min((b - 1) % 10, 3)] : "th"
				},
				srcformat: "Y-m-d",
				newformat: "d/m/Y",
				parseRe: /[#%\\\/:_;.,\t\s-]/,
				masks: {
					ISO8601Long: "Y-m-d H:i:s",
					ISO8601Short: "Y-m-d",
					ShortDate: "n/j/Y",
					LongDate: "l, F d, Y",
					FullDateTime: "l, F d, Y g:i:s A",
					MonthDay: "F d",
					ShortTime: "g:i A",
					LongTime: "g:i:s A",
					SortableDateTime: "Y-m-d\\TH:i:s",
					UniversalSortableDateTime: "Y-m-d H:i:sO",
					YearMonth: "F, Y"
				},
				reformatAfterEdit: false
			},
			baseLinkUrl: "",
			showAction: "",
			target: "",
			checkbox: {
				disabled: true
			},
			idName: "id"
		}
	});
})(jQuery);