
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
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNagatoro%2FVol.1%20Chapter%200_%20Omake%204_%20Branch-off%20Edition.pdf?alt=media&token=df8b56ec-65e5-4424-803d-8a0ad3f79095",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNagatoro%2FVol.1%20Chapter%201_%20You're%20Slightly%E2%80%A6.pdf?alt=media&token=cf985257-9032-49be-8f07-9a52822a237d",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNagatoro%2FVol.1%20Chapter%202_%20Watching%20You%20Is%20So%20Fun!.pdf?alt=media&token=dfb03766-90ae-49e9-9864-fee333b828c6",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNagatoro%2FVol.1%20Chapter%203_%20Please%20Go%20Out%20With%20Me!.pdf?alt=media&token=1d0d2ecc-17e6-4ee7-bc5b-9851971d375f",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNagatoro%2FVol.1%20Chapter%204_%20Looks%20Like%20Senpai%E2%80%99s%20Wish%20Has%20Been%20Fulfilled!!.pdf?alt=media&token=19edf425-bb17-463b-9974-197cacaaf714",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNagatoro%2FVol.1%20Chapter%205_%20Please%20Brush%20Your%20Teeth%2C%20Senpai.pdf?alt=media&token=670d6b81-7eeb-46c8-9ee1-5f12b117649b",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNagatoro%2FVol.1%20Chapter%206_%20Wassup%2C%20Senpai!.pdf?alt=media&token=56e72ba2-74a4-44d2-887d-dc6712d0ebc0",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNagatoro%2FVol.1%20Chapter%207_%20Senpai%2C%20There's%20Still%20Foam%20On%20You.pdf?alt=media&token=a9af5226-113b-410c-b12d-51520fa77286",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNagatoro%2FVol.1%20Chapter%208_%20Senpai%2C%20You're%20A%20Little%E2%80%A6.pdf?alt=media&token=914b2110-5259-4c6c-a549-ffbc38312103",
                ch10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FNagatoro%2FVol.2%20Chapter%209_%20Senpai%20Is%20An%20Easy%20Target.pdf?alt=media&token=5f7c36c0-9843-4fac-8ed6-66ad63758d15",
                
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
        

        
