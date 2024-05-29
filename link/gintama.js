
        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAQFFD0msPus55mE55_JIZP4sl_BZsu6A8",
            authDomain: "mangadb-86f0e.firebaseapp.com",
            projectId: "mangadb-86f0e",
            storageBucket: "mangadb-86f0e.appspot.com",
            messagingSenderId: "372940836103",
            appId: "1:372940836103:web:ff4456fd9370f5e050c9a2"
        };
        
        
        // // Firebase Storage URL for One Piece Chapter 0 PDF
        // const onePieceChapter0Url = "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FOne%20Piece%2FChapter%200.pdf?alt=media&token=45883182-182a-4afb-98a0-045faf790c7e";

        // // Function to retrieve and display PDF from Firebase Storage in a new tab
        // function openPDFInNewTab(url) {
        //     window.open(url, '_blank');
        // }

        // // Add event listener to the chapter link
        // const chapterLink = document.getElementById("One1");
        // chapterLink.addEventListener("click", (event) => {
        //     event.preventDefault();
        //     openPDFInNewTab(onePieceChapter0Url);
        // });

        // Initialize Firebase
        // firebase.initializeApp(firebaseConfig);

        // Function to retrieve and display PDF from Firebase Storage in a new tab
        function openPDFInNewTab(url) {
            window.open(url, '_blank');
        }

        // Firebase Storage URLs for One Piece Chapters
        const chapterUrls = {
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FGintama%2FChapter%201%20_%20There%20Is%20No%20Evil%20In%20Those%20With%20A%20Natural%20Perm.pdf?alt=media&token=c612a156-1869-4a10-8e3f-56ba10f905a3",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FGintama%2FChapter%202%20_%20Owner%20Should%20Take%20Care%20Of%20Their%20Pets%20Until%20The%20End.pdf?alt=media&token=d4a90915-2db0-403f-8465-2fa2f41d7cbf",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FGintama%2FChapter%203%20_%20Be%20Aware%20That%20Jump%20Magazine%20My%20Come%20Out%20On%20Saturdays.pdf?alt=media&token=51e72534-e845-418e-bcf6-077b1af612c2",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FGintama%2FChapter%204%20_%20One%20That%20Looks%20Good%20At%20Firt%20Sight%20Is%20No%20Good%20At%20All.pdf?alt=media&token=501eb6a5-1aa9-440f-a2f1-68128fc3c2e6",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FGintama%2FChapter%205%20_%20Make%20Friends%20That%20Will%20Call%20Each%20Other%20By%20Nicknames%20Forever.pdf?alt=media&token=256afd74-0d2c-4fc8-9d30-17c2a3a4116d",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FGintama%2FChapter%206%20_%20If%20You%20Guys%20Have%20Time%20To%20Be%20Terrorist%20Take%20Pero%20For%20A%20Walk.pdf?alt=media&token=059bf454-57e0-4d5e-b82c-74b305ddbbe1",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FGintama%2FChapter%207%20_%20The%20Diference%20Between%20Toughness%20And%20Vengeance%20Is%20Paper%20Thin!.pdf?alt=media&token=f9bb795c-f19f-42eb-840f-d9629432c98c",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FGintama%2FChapter%208%20_%20The%20Diference%20Between%20Strength%20And%20Perseverance%20Is%20Paper%20Thin!.pdf?alt=media&token=fa2132cc-622d-4a8e-9988-15d8a962127d",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FGintama%2FChapter%209%20_%20A%20Good%20Fight%20Should%20Do.pdf?alt=media&token=06b8ca9a-cbc7-4719-9ada-fcb576625f9c",
                ch10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FGintama%2FChapter%2010%20_%20When%20You%20Re%20Tired%2C%20Eat%20Sour%20Stuff.pdf?alt=media&token=279bc1db-0309-489a-b191-6ebfaac370a9",
                
        };

        

       




        
        // Add event listeners for one piece chapter links
        document.getElementById("One1").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch1);
        });

        document.getElementById("One2").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch2);
        });

        document.getElementById("One3").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch3);
        });
        document.getElementById("One4").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch4);
        });
        document.getElementById("One5").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch5);
        });
        document.getElementById("One6").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch6);
        });
        document.getElementById("One7").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch7);
        });
        document.getElementById("One8").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch8);
        });
        document.getElementById("One9").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch9);
        });
        document.getElementById("One10").addEventListener("click", (event) => {
            event.preventDefault();
            openPDFInNewTab(chapterUrls.ch10);
        });
        

        
