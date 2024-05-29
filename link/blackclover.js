
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
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlack%20Clover%2FChapter%200.1.pdf?alt=media&token=86e471bb-ff45-4df9-a0d7-09ca25c8d816",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlack%20Clover%2FChapter%200.pdf?alt=media&token=747dda36-8d2c-48a1-adb0-5644e43c2661",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlack%20Clover%2FChapter%201%20_%20the%20boy's%20vow.pdf?alt=media&token=f4f0f254-e850-4fad-b814-76326ae4bcf2",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlack%20Clover%2FChapter%202%20_%20the%20magic%20knights%20entrance%20e.pdf?alt=media&token=7dc89f0b-ad45-430b-ba72-9ca2f9d4ea5b",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlack%20Clover%2FChapter%203%20_%20the%20road%20to%20the%20magic%20empero.pdf?alt=media&token=8445ae0a-b292-4317-9698-096827b750ad",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlack%20Clover%2FChapter%204%20_%20the%20black%20sheep's%20crook.pdf?alt=media&token=06ce245b-1484-4131-bb09-46084a6c24cd",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlack%20Clover%2FChapter%205%20_%20the%20other%20noob.pdf?alt=media&token=f3504e56-8f95-4b38-af85-b974a354cf76",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlack%20Clover%2FChapter%206%20_%20go%20go%2C%20first%20misson%20!!!.pdf?alt=media&token=82f1c822-a8a6-4cd8-9d63-ea2e90e15bbc",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlack%20Clover%2FChapter%207%20_%20beast.pdf?alt=media&token=1eebc09c-c55f-468f-90bd-1a9b5acb17b3", 
                ch10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlack%20Clover%2FChapter%208%20_%20the%20protectors.pdf?alt=media&token=049011f6-4f23-4abe-8765-1a6c6eb2b389",
                
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
        

        