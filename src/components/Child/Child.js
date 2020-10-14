import React from "react";
import PropTypes from "prop-types";
import "./Child.scss";

const Child = ({ respObj }) => {
  const sampleTxt = "TEST DATA";
  const title = respObj.title;
  console.log(title);
  return (
    <div id="mainContain">
      <div id="1" style={{ fontWeight: "450" }}>
        {respObj.explanation}{" "}
      </div>
      <div id="date">
        {respObj.date}
        <p style={{ display: "none" }}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac eros
          lorem. Mauris suscipit et diam eget venenatis. Sed iaculis fringilla
          enim et facilisis. Fusce consequat tellus congue euismod commodo.
          Suspendisse aliquet ut urna sit amet maximus. Integer quam tortor,
          pulvinar sed augue at, semper suscipit magna. Maecenas porta pretium
          lacus eu vulputate. Vivamus lacinia pulvinar est, feugiat lobortis
          dolor facilisis non. In vulputate orci a nisl semper faucibus.
          Phasellus tristique rutrum orci ac varius. Nulla quis facilisis orci.
          Aenean venenatis et eros viverra facilisis. Aliquam id est nulla.
          Vestibulum a dapibus leo. Mauris posuere commodo urna vel faucibus.
          Suspendisse porttitor maximus massa non pulvinar. Fusce sit amet
          lobortis arcu. Vivamus dui massa, hendrerit sit amet blandit vel,
          sagittis ut sapien. Curabitur efficitur, libero a porta pulvinar, nisi
          lacus vestibulum lacus, in interdum leo mi in quam. Morbi vel molestie
          mauris. Fusce tristique pretium ex, fermentum maximus felis feugiat a.
          Integer vel viverra neque. Nunc ultricies, tortor in suscipit pretium,
          tellus sem sagittis orci, id fringilla est nisi vel turpis. Vestibulum
          aliquam, purus vel placerat fringilla, ante mauris elementum magna,
          ornare dictum nisl tortor sit amet tortor. Sed porta ornare ante
          efficitur viverra. Pellentesque ut lorem pulvinar, auctor tortor at,
          semper odio. Donec lacinia blandit nisl at mattis. Aliquam sit amet
          neque nec risus malesuada consequat. Phasellus ut urna a lorem tempus
          tincidunt. Mauris magna felis, finibus quis posuere dictum, dapibus
          quis arcu. Praesent a sapien at mauris facilisis placerat nec in erat.
          In in justo sapien. Integer convallis sapien erat, non pellentesque
          mauris lacinia id. Proin aliquam mauris semper dolor consequat, non
          vehicula magna faucibus. Suspendisse odio nunc, malesuada ut lectus
          id, dictum varius ligula. Suspendisse faucibus sapien ante, eget
          auctor ex egestas sed. Donec auctor lacus faucibus odio interdum
          bibendum. Curabitur ut nunc ornare, congue magna condimentum, laoreet
          magna. Sed pharetra convallis condimentum. Fusce et sapien eget sapien
          finibus facilisis. Nulla eu neque sodales, imperdiet diam ut, blandit
          nunc. In vestibulum sollicitudin massa sed luctus. Mauris vel mi
          pharetra, elementum mi non, imperdiet tellus. Maecenas a malesuada
          mauris. Nam mattis diam sem, volutpat consectetur odio efficitur sit
          amet. Maecenas ut augue eu felis rhoncus tristique. Suspendisse
          sollicitudin arcu ut diam condimentum elementum. Donec auctor
          convallis mi, vel pretium neque semper eget. Ut nibh nibh, porttitor
          interdum condimentum ac, sodales vitae quam. Phasellus massa lorem,
          tristique vel dolor a, malesuada lacinia ligula. Sed non dui erat.
          Nunc ac elit sit amet felis sodales elementum et vitae felis. Fusce ac
          libero id quam venenatis aliquam eget sit amet lorem. Integer et nisl
          magna. Donec ligula dui, suscipit vel porttitor sed, venenatis id
          elit. Donec vulputate dui nec arcu pellentesque interdum. Vestibulum
          non ipsum sit amet tortor aliquet vehicula. Nam ultricies egestas
          sagittis. Curabitur a tincidunt sem. Cras blandit euismod turpis.
          Etiam vulputate facilisis eros ut pretium. Fusce vitae lectus id velit
          suscipit malesuada. Quisque aliquam tellus nec tortor blandit, eu
          semper ipsum euismod. Mauris dignissim hendrerit quam, vitae tristique
          est malesuada vitae. Etiam velit turpis, imperdiet eu lacinia eget,
          aliquet sit amet sapien. Maecenas a nibh convallis, feugiat ipsum
          tincidunt, tristique enim. Nam non tincidunt ex, eu maximus velit.
          Mauris venenatis elit at nisi semper, in ultricies neque cursus.
          Vivamus tempor ac lorem non facilisis. Nullam lobortis erat tincidunt
          libero euismod malesuada. Vivamus commodo, ante ut aliquet rhoncus,
          lacus ligula varius tortor, at malesuada urna leo id elit. Integer
          auctor ipsum sed posuere rutrum. Aenean posuere cursus erat, in
          consectetur arcu vestibulum nec. Nulla lobortis porttitor risus eget
          tristique. Phasellus eu interdum odio. Mauris felis nunc, egestas ac
          commodo vel, convallis congue mauris. Quisque egestas luctus cursus.
          Nunc porttitor diam interdum magna sodales, ac venenatis orci
          pharetra. Etiam dui velit, iaculis eleifend tincidunt in, commodo a
          leo. Ut posuere felis libero, eu sagittis purus mattis ut. Fusce
          ultricies id eros pulvinar mollis. Vivamus rutrum velit eu est
          iaculis, et tempor ligula dignissim. Nulla facilisi. Vivamus risus
          eros, convallis ut nisi non, lobortis hendrerit nulla. Donec id
          iaculis lacus. Vestibulum eget molestie ex, sed pellentesque justo. Ut
          aliquet porta urna, vel rhoncus neque maximus at. Donec ut faucibus
          orci. Quisque mollis cursus sem, vel commodo enim scelerisque ut.
          Mauris lacus enim, pretium nec dignissim in, mollis non leo. Morbi non
          ante eget purus lacinia ornare. Vestibulum sed placerat odio.
          Pellentesque laoreet facilisis turpis nec varius. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Phasellus rhoncus laoreet urna, suscipit egestas neque
          ornare at. Integer condimentum rutrum diam, at dignissim eros. Quisque
          in sem semper, rhoncus metus a, egestas nibh. Vestibulum mollis quis
          turpis ac hendrerit. Pellentesque vel nibh non leo vulputate luctus.
          Pellentesque blandit risus nec neque rhoncus, nec lacinia justo
          dictum. Integer viverra dui in fermentum gravida. Nam quis semper
          dolor. Suspendisse et diam eget felis lobortis sodales. Aenean
          scelerisque risus magna, eget commodo est varius nec. Nam suscipit
          ligula a velit posuere sodales mattis ut tellus. Sed fringilla
          fermentum risus sed imperdiet. Proin nec convallis ante, vitae
          consectetur est. Praesent vel placerat sem. Proin tempus pharetra eros
          ac fermentum. Vestibulum vel ullamcorper ex, eget efficitur urna.
          Curabitur vulputate, sem vel rhoncus tempor, mi lectus cursus ligula,
          facilisis tempor tellus leo tempor nulla. Maecenas fermentum sodales
          felis quis cursus. Nullam laoreet rutrum purus, id iaculis eros
          condimentum id. Phasellus eget mi molestie, fermentum mi eu, placerat
          purus. Cras arcu augue, vehicula vitae volutpat vel, auctor quis
          purus. Suspendisse elementum cursus interdum. Aenean accumsan augue
          venenatis, imperdiet lacus vitae, placerat velit. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Proin vehicula
          turpis a lacus vulputate dapibus. Etiam tortor turpis, maximus vitae
          justo at, ultricies tempus ipsum. Cras vitae posuere velit. Maecenas
          blandit, ante ac vehicula fermentum, dolor eros congue sem, sed
          facilisis dolor dolor ut sapien. Suspendisse in interdum sem. Ut et
          sollicitudin eros, vitae malesuada ligula. Pellentesque et turpis sit
          amet magna posuere posuere eget non ipsum. Maecenas faucibus pretium
          posuere. Curabitur quam dui, laoreet vitae augue at, fringilla varius
          sapien. Vivamus tincidunt convallis tellus, et luctus nulla tincidunt
          et. Integer quis eleifend risus. Nullam a dapibus turpis. Vivamus
          maximus a tortor eu convallis. Suspendisse nulla urna, elementum in
          luctus sed, iaculis id ante. Proin justo leo, fermentum et lacus sed,
          lacinia rhoncus enim. Integer at orci consequat, porta ante vitae,
          semper ipsum. Aliquam sit amet est ipsum. Suspendisse dictum vel
          tellus et iaculis. In et bibendum felis. Etiam nec condimentum risus.
          Nulla ac tristique felis. Cras interdum, dolor id molestie mattis,
          lacus augue sodales metus, vel semper odio ante a tellus. Aenean
          dapibus magna et pretium rhoncus. Fusce egestas vitae justo a lacinia.
          Nunc et tempus purus, vitae pretium ante. Duis ut posuere tortor.
          Mauris congue libero ligula. Suspendisse posuere ipsum sit amet ligula
          porttitor egestas. Mauris a elit at justo scelerisque iaculis vitae
          sit amet mauris. Integer faucibus dolor et blandit ornare. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Sed nec odio ac libero egestas dictum. Vestibulum maximus
          bibendum elit sed malesuada. Morbi eget nisi vel nisl convallis
          aliquam quis at diam. Aliquam diam elit, vestibulum nec nisl non,
          cursus laoreet massa. Aenean at porta erat. Integer vel eleifend ex.
          Nunc imperdiet dolor velit, blandit accumsan diam ornare sed. Nunc
          eget gravida diam. Fusce eu tempor ipsum, quis vestibulum velit.
          Aliquam euismod leo sit amet tellus gravida, vitae ullamcorper lectus
          cursus. Praesent quis elit quis nibh tempus suscipit. Vivamus
          ullamcorper ipsum a faucibus scelerisque. Aenean nibh justo, volutpat
          eget ullamcorper in, ornare varius lorem. Mauris nec vulputate libero.
          Nulla facilisi. Praesent justo tortor, pulvinar id ante eget, pretium
          tincidunt magna. Mauris sollicitudin tincidunt neque at tristique.
          Mauris nunc nunc, tincidunt eu metus id, commodo varius ligula.
          Suspendisse ut sem urna. Duis turpis arcu, volutpat quis magna at,
          finibus pretium enim. Sed sagittis metus erat, vel lobortis ex
          sagittis in. Donec sit amet rhoncus lacus, quis mollis urna. Ut
          pellentesque porttitor neque, in consectetur diam rhoncus in. Fusce
          pulvinar mi non nisi bibendum, sit amet blandit leo auctor. Aliquam
          erat volutpat. Maecenas faucibus sodales tempor. Suspendisse justo
          erat, volutpat ut posuere sit amet, commodo eget purus. Integer quis
          justo interdum, dapibus odio et, pharetra massa. Nullam convallis quis
          augue quis placerat. Nunc a congue metus. Praesent at iaculis turpis.
          Fusce ut purus vitae ante congue maximus eu vel mauris. Vivamus eu
          quam neque. Sed turpis dolor, pharetra a blandit vel, suscipit sit
          amet mauris. Mauris non nunc sit amet libero luctus faucibus. Sed vel
          dignissim urna. Integer tincidunt nulla quis posuere suscipit. Nullam
          vitae mauris posuere, finibus metus sit amet, ornare est. Vestibulum
          molestie risus at tempus vehicula. Fusce vitae molestie nisi.
          Phasellus elementum varius dui, vitae tincidunt nulla maximus ac. Nunc
          a nisi eget nisi posuere cursus. Vestibulum dignissim dui rutrum
          rhoncus auctor. Sed ut lacinia tortor. Sed dui ipsum, lacinia et
          accumsan feugiat, volutpat eu magna. Nunc ex urna, condimentum
          interdum sodales a, feugiat consectetur quam. Suspendisse fringilla
          faucibus pulvinar. Aliquam erat volutpat. Aenean eu diam aliquam,
          vulputate ex eget, semper lorem. Integer lacinia, lorem nec bibendum
          pharetra, risus purus scelerisque velit, ac vulputate eros elit eu
          nibh. Proin sit amet sapien nulla. Etiam pretium pretium purus, vitae
          aliquet justo volutpat quis. Fusce aliquam risus id dolor malesuada, a
          congue tortor molestie. Fusce feugiat nunc in eros luctus finibus eget
          ac dolor. In pulvinar at libero vitae consectetur. Pellentesque
          sodales tristique nunc, vitae accumsan est. Ut in arcu imperdiet augue
          volutpat gravida eget sed tellus. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Donec at
          ultricies erat. Aenean non elit porttitor, venenatis ligula et,
          suscipit est. Donec quis gravida nulla, vitae tincidunt diam. Cras
          tempus, ligula in faucibus fermentum, massa erat commodo est, eget
          sagittis ligula lorem non justo. Nunc ultricies purus purus, at
          scelerisque sem accumsan at. Suspendisse ultricies a erat et mollis.
          Vestibulum non augue id neque tempus suscipit. Proin ac hendrerit
          nibh. Ut at diam nec tortor convallis porta ut ut nisi. Etiam vehicula
          lectus et dapibus pulvinar. Quisque ultricies elit venenatis turpis
          eleifend, in aliquet tellus semper. Aliquam malesuada id risus a
          dictum. Suspendisse potenti. Suspendisse vitae augue ipsum. Sed
          facilisis justo ac pulvinar maximus. Vestibulum leo dui, tristique nec
          orci id, commodo ornare velit. Fusce tincidunt nunc ut ligula cursus,
          egestas euismod tortor volutpat. Nam condimentum ornare tristique.
          Quisque vel ultricies mi. Morbi eget justo eros. Proin consectetur
          placerat elit, ut rutrum urna rhoncus eget. Cras quis lorem erat.
          Curabitur eu lacus ex. Fusce ac diam venenatis, facilisis odio at,
          mollis nisl. Proin dapibus tellus non mauris efficitur commodo.
          Quisque augue ligula, pellentesque a sollicitudin a, lobortis non est.
          Maecenas hendrerit ornare dui, nec luctus quam semper dictum. Aenean
          vestibulum gravida leo, non porttitor diam tincidunt quis. Aliquam sit
          amet consectetur urna, vitae scelerisque lorem. Aenean non leo et
          turpis pharetra blandit. Sed placerat nec mi vel dapibus. Maecenas
          auctor, massa ac eleifend feugiat, risus arcu venenatis sapien, ut
          cursus dolor orci sit amet libero. Sed vel nunc est. Aenean in tellus
          a velit vestibulum rhoncus. Curabitur egestas quam tellus, vel
          malesuada ipsum mattis et. Aliquam vitae ultrices sem, sit amet mollis
          enim. Curabitur arcu ipsum, ultrices scelerisque nunc in, fermentum
          tincidunt tortor. Cras nisi eros, eleifend ut volutpat aliquam,
          tristique sit amet turpis. Maecenas sollicitudin pellentesque felis eu
          gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          nec ipsum eros. Quisque quis convallis justo.
        </p>
      </div>
      {respObj && respObj.hdurl ? (
        <div>
          <h6>Image of the day in HD</h6>
          <img src={respObj.hdurl} width="100%" height="auto"></img>
        </div>
      ) : (
        respObj.url && (
          <div>
            <h6>Image of the day</h6>
            <img src={respObj.url} width="100%" height="auto"></img>
          </div>
        )
      )}
    </div>
  );
};

Child.propTypes = {
  respObj: PropTypes.instanceOf(Object).isRequired,
};

export default Child;
