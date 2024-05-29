
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
            
                ch1: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlue%20Lock%2FMono%20Scans%20%26%20EiShun%20Team%20%26%20Tonari%20No%20Scanlation_Vol.1%20Ch.1%20-%20Dream.pdf?alt=media&token=e747215f-444d-47f4-ba82-f77380302945",
                ch2: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlue%20Lock%2FMono%20Scans%20%26%20Tonari%20No%20Scanlation_Vol.1%20Ch.2%20-%20Moving%20In.pdf?alt=media&token=d77b9c5c-d1ad-4031-b15b-76381033de8b",
                ch3: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlue%20Lock%2FBlue%20Sterling%20Scans_Vol.1%20Ch.3%20-%20Monster.pdf?alt=media&token=ae05f846-144c-43dd-bc4e-b4e63158c1ed",
                ch4: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlue%20Lock%2FBlue%20Sterling%20Scans_Vol.1%20Ch.4%20-%20Now%20or%20Never.pdf?alt=media&token=a5c3dd0f-e943-488a-bb4f-59dd73d0d3b4",
                ch5: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlue%20Lock%2FMono%20Scans%20%26%20EiShun%20Team%20%26%20Tonari%20No%20Scanlation_Vol.2%20Ch.5%20-%20Football%20From%20Scratch.pdf?alt=media&token=389aa0b5-6438-4943-b147-cdc64a872b6e",
                ch6: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlue%20Lock%2FBlue%20Sterling%20Scans%20%26%20Mono%20Scans%20%26%20EiShun%20Team_Vol.2%20Ch.6%20-%20Foundation.pdf?alt=media&token=65fc8dc7-304e-4eaf-8496-6577bf8ade57",
                ch7: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlue%20Lock%2FBlue%20Sterling%20Scans%20%26%20Mono%20Scans%20%26%20Tonari%20No%20Scanlation_Vol.2%20Ch.7%20-%20Get%20In%20Front%20of%20The%20Goal!.pdf?alt=media&token=99423739-fd8f-40a9-981e-88d0833f8109",
                ch8: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlue%20Lock%2FBlue%20Sterling%20Scans%20%26%20Mono%20Scans%20%26%20EiShun%20Team_Vol.2%20Ch.8%20-%20Message.pdf?alt=media&token=83ff4896-093a-438b-934e-8c2d266664f4",
                ch9: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlue%20Lock%2FBlue%20Sterling%20Scans%20%26%20Mono%20Scans%20%26%20Tonari%20No%20Scanlation_Vol.2%20Ch.9%20-%20Superhero.pdf?alt=media&token=4a0e475a-d37b-4de0-8593-883e9e2ab34a",
                ch10: "https://firebasestorage.googleapis.com/v0/b/mangadb-86f0e.appspot.com/o/Popular%2FBlue%20Lock%2FBlue%20Sterling%20Scans%20%26%20Mono%20Scans%20%26%20Tonari%20No%20Scanlation_Vol.2%20Ch.10%20-%20_I'll%20Be%20The%20Next%20%209!_%20Tactic.pdf?alt=media&token=37eea38a-9b5e-41c9-8643-0509a7294f8d",
                
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
        

        
