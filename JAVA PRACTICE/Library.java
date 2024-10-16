public class Library{

    String bookname;
    int bookyear;
    
    public  Library(String bookname , int bookyear){
        this.bookname = bookname;
        this.bookyear = bookyear;
    }
    public void printdetails(){
        System.out.println("Book Name: " + bookname + ", Year: " + bookyear);
    }
    public static void main(String[] args) {
        Library lib = new Library("santhosh",2131);
        lib.printdetails();
    }
}