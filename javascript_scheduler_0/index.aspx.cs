using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.IO;

namespace javascript_scheduler_0
{
    public partial class index : System.Web.UI.Page
    {
        public static string dataPath = HttpContext.Current.Server.MapPath(".") + @"\data\";

        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]
        public static string loadData(string request)
        {
            StreamReader input = new StreamReader(dataPath + "file.txt");
            string jsonString = input.ReadLine();
            input.Close();

            return jsonString;
        }//End loadData

        [WebMethod]
        public static string saveData(string request)
        {
            StreamWriter output = new StreamWriter(dataPath + "file.txt");
            output.WriteLine(request);
            output.Close();

            return "saveData";
        }
    }
}